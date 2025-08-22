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
  // must be 0..80 contiguous
  if (nums[0] !== 0) return false
  const contiguous = nums.every((v, i) => i === 0 || v - nums[i - 1] === 1)
  const max = nums[nums.length - 1]
  return contiguous && max === 80
}

// Recursively detect if a type *uses* ScaleValue anywhere (alias or expanded)
const typeUsesScaleValue = (checker: ts.TypeChecker, t: ts.Type): boolean => {
  // Direct alias name
  const aliasName = (t as any).aliasSymbol?.getName?.()
  if (aliasName === 'ScaleValue') return true

  // Expanded numeric union 0..80
  if (looksLikeScaleValueUnion(t)) return true

  // Unions: any member uses ScaleValue
  if (t.isUnion()) return t.types.some(tt => typeUsesScaleValue(checker, tt))

  // Type references / generics: check type arguments
  const objFlags = (t.flags & ts.TypeFlags.Object) !== 0 ? (t as any).objectFlags : 0
  const isRef = (objFlags & ts.ObjectFlags.Reference) !== 0
  if (isRef) {
    // Prefer aliasTypeArguments; fall back to instantiated typeArguments
    const aliasArgs: ts.Type[] | undefined = (t as any).aliasTypeArguments
    const typeArgs: ts.Type[] | undefined = (t as any).typeArguments
    const args = (aliasArgs && aliasArgs.length ? aliasArgs : typeArgs) || []
    if (args.some(arg => typeUsesScaleValue(checker, arg))) return true
  }

  return false
}

// Collect union literal options (strings & numbers). Keeps checker order.
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
 * - [] otherwise.
 */
export function getOptions(checker: ts.TypeChecker, t: ts.Type): string | Array<string | number> {
  if (typeUsesScaleValue(checker, t)) {
    return '0, 1, 2 ... 80'
  }

  const opts = collectUnionLiteralOptions(t)
  return opts.length ? opts : []
}
