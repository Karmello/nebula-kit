import ts from 'typescript'

// ---- helpers ---------------------------------------------------------------

const isNumberLiteral = (t: ts.Type) => (t.flags & ts.TypeFlags.NumberLiteral) !== 0
const isStringLiteral = (t: ts.Type) => (t.flags & ts.TypeFlags.StringLiteral) !== 0

// Does this type *look like* the ScaleValue union: 0..80 (contiguous, ascending)?
const looksLikeScaleValueUnion = (t: ts.Type): boolean => {
  if (!t.isUnion()) return false
  const nums = t.types
    .filter(isNumberLiteral)
    .map((tt: any) => tt.value)
    .sort((a, b) => a - b)
  if (nums.length === 0) return false
  if (nums[0] !== 0) return false
  const contiguous = nums.every((v, i) => i === 0 || v - nums[i - 1] === 1)
  const max = nums[nums.length - 1]
  return contiguous && max === 80
}

// Recursively detect if a type *uses* ScaleValue anywhere (alias or expanded)
// Now with cycle protection to avoid ReactNode-style recursive explosions
const typeUsesScaleValue = (
  checker: ts.TypeChecker,
  t: ts.Type,
  seen: WeakSet<ts.Type> = new WeakSet(),
  depth = 0
): boolean => {
  // bail if we've already seen this node in the current walk
  if (seen.has(t)) return false
  seen.add(t)

  // hard depth cap as an extra fuse against pathological types
  if (depth > 200) return false

  const aliasName = (t as any).aliasSymbol?.getName?.()
  if (aliasName === 'ScaleValue') return true
  if (looksLikeScaleValueUnion(t)) return true

  // Unions
  if (t.isUnion()) {
    return t.types.some(tt => typeUsesScaleValue(checker, tt, seen, depth + 1))
  }

  // References / generics (e.g., Array<T>, Promise<T>, etc.)
  const objFlags = (t.flags & ts.TypeFlags.Object) !== 0 ? (t as any).objectFlags : 0
  const isRef = (objFlags & ts.ObjectFlags.Reference) !== 0
  if (isRef) {
    const aliasArgs: ts.Type[] | undefined = (t as any).aliasTypeArguments
    const typeArgs: ts.Type[] | undefined = (t as any).typeArguments
    const args = (aliasArgs && aliasArgs.length ? aliasArgs : typeArgs) || []
    if (args.some(arg => typeUsesScaleValue(checker, arg, seen, depth + 1))) return true

    // Some references also expose a 'target' that can chain into more args
    const target: ts.Type | undefined = (t as any).target
    if (target && !seen.has(target)) {
      if (typeUsesScaleValue(checker, target, seen, depth + 1)) return true
    }
  }

  return false
}

// Prefer source order when the union comes from a type alias like: type X = 'a' | 'b' | 1
const collectUnionLiteralsFromAliasInSourceOrder = (t: ts.Type): Array<string | number> | null => {
  const aliasSym = (t as any).aliasSymbol as ts.Symbol | undefined
  if (!aliasSym) return null

  const decls = aliasSym.declarations ?? []
  const aliasDecl = decls.find((d): d is ts.TypeAliasDeclaration => ts.isTypeAliasDeclaration(d))
  if (!aliasDecl) return null

  // Walk the alias' declared type node; only handle straightforward literal unions
  const typeNode = aliasDecl.type
  if (!typeNode || !ts.isUnionTypeNode(typeNode)) return null

  const toLiteral = (node: ts.TypeNode): string | number | null => {
    // Unwrap parentheses if any
    while (ts.isParenthesizedTypeNode(node)) node = node.type

    if (ts.isLiteralTypeNode(node)) {
      const lit = node.literal
      if (ts.isStringLiteral(lit) || ts.isNoSubstitutionTemplateLiteral(lit)) return lit.text
      if (ts.isNumericLiteral(lit)) return Number(lit.text)
    }
    return null
  }

  const vals = typeNode.types.map(toLiteral).filter((v): v is string | number => v !== null)
  return vals.length ? vals : null
}

// Checker order (normalized) — fallback when alias/AST path isn’t available
const collectUnionLiteralOptions = (t: ts.Type): Array<string | number> => {
  if (!t.isUnion()) return []
  return t.types
    .filter(tt => isStringLiteral(tt) || isNumberLiteral(tt))
    .map(tt => (isNumberLiteral(tt) ? (tt as any).value : (tt as any).value))
}

// ---- main ------------------------------------------------------------------

/**
 * Returns:
 * - "0, 1, 2 ... 80" (string) if the type is ScaleValue or any generic/union that uses ScaleValue.
 * - An array of options (string|number) if the type is a union of string/number literals.
 *   *Prefers source order for alias unions; falls back to checker order otherwise.*
 * - [] otherwise.
 */
export function getOptions(checker: ts.TypeChecker, t: ts.Type): string | Array<string | number> {
  if (typeUsesScaleValue(checker, t)) {
    return '0, 1, 2 ... 80'
  }

  // Try to preserve the order as written in a type alias
  const fromAlias = collectUnionLiteralsFromAliasInSourceOrder(t)
  if (fromAlias) return fromAlias

  // Fallback to checker-provided order
  const opts = collectUnionLiteralOptions(t)
  return opts.length ? opts : []
}
