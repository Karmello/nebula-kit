import ts, { TypeChecker, SymbolDisplayPart } from 'typescript'

const displayPartsToString = (parts: SymbolDisplayPart[]) =>
  parts && parts.length ? ts.displayPartsToString(parts) : ''

export const getSymbolDocs = (checker: TypeChecker, symbol: ts.Symbol) => {
  const description = displayPartsToString(symbol.getDocumentationComment(checker))

  const jsDocTags = symbol.getJsDocTags().map(t => ({
    name: t.name,
    text: Array.isArray(t.text) ? displayPartsToString(t.text) : t.text || '',
  }))

  return { description, jsDocTags }
}
