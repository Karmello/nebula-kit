import ts, { Declaration } from 'typescript'

export const isRequired = (prop: ts.Symbol, decl: Declaration) => {
  return !(
    (prop.getFlags() & ts.SymbolFlags.Optional) !== 0 ||
    (decl && !!(decl as ts.PropertySignature).questionToken)
  )
}
