import ts from 'typescript'

export const displayTypeExact = (
  checker: ts.TypeChecker,
  t: ts.Type,
  decl: ts.Declaration | undefined,
  sf: ts.SourceFile
): string => {
  // 1) Prefer the written annotation (what’s in your code)
  const ann = (decl as any)?.type as ts.TypeNode | undefined
  if (ann) return ann.getText(sf)

  // 2) If the type is still tied to an alias, print the alias name (+ generics)
  const aliasSym = (t as any).aliasSymbol as ts.Symbol | undefined
  if (aliasSym) {
    const aliasName = aliasSym.getName()
    const aliasArgs = (t as any).aliasTypeArguments as ts.Type[] | undefined
    if (aliasArgs?.length) {
      const renderedArgs = aliasArgs.map(a => displayTypeExact(checker, a, decl, sf)).join(', ')
      return `${aliasName}<${renderedArgs}>`
    }
    return aliasName
  }

  // 3) Fallback: normal printer
  return checker.typeToString(t)
}
