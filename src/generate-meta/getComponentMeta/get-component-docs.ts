import ts, { Program, Symbol as TSSymbol } from 'typescript'

const displayPartsToString = (parts?: ts.SymbolDisplayPart[]) =>
  parts && parts.length ? ts.displayPartsToString(parts) : ''

export function getComponentMeta(
  program: Program,
  sourcePath: string,
  componentName: string
): { description: string; jsDocTags: Array<{ name: string; text: string }> } {
  const checker = program.getTypeChecker()
  const sf = program.getSourceFile(sourcePath)
  if (!sf) throw new Error(`No source file: ${sourcePath}`)

  let decl: ts.FunctionDeclaration | ts.VariableDeclaration | undefined

  const visit = (node: ts.Node) => {
    // function Button(...) {}
    if (ts.isFunctionDeclaration(node) && node.name?.text === componentName) {
      decl = node
      return
    }
    // const Button = ...
    if (ts.isVariableStatement(node)) {
      for (const d of node.declarationList.declarations) {
        if (ts.isIdentifier(d.name) && d.name.text === componentName) {
          decl = d
          return
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  ts.forEachChild(sf, visit)

  if (!decl) {
    // As a fallback, try module exports (handles re-exports or default export named function)
    const moduleSym = checker.getSymbolAtLocation(sf)
    const exports = moduleSym ? checker.getExportsOfModule(moduleSym) : []
    const match = exports.find(s => s.escapedName === (componentName as any))
    const sym = match ?? moduleSym // last-ditch: file symbol
    if (sym) {
      const description = displayPartsToString(sym.getDocumentationComment(checker))
      const jsDocTags = sym.getJsDocTags().map(t => ({
        name: t.name,
        text: Array.isArray(t.text) ? displayPartsToString(t.text) : t.text || '',
      }))
      return { description, jsDocTags }
    }
    return { description: '', jsDocTags: [] }
  }

  // Prefer the declaration’s own symbol if it has one; else use the name token
  let symbol: TSSymbol | undefined =
    (decl as any).symbol ||
    (ts.isVariableDeclaration(decl) && ts.isIdentifier(decl.name)
      ? checker.getSymbolAtLocation(decl.name)
      : undefined) ||
    (ts.isFunctionDeclaration(decl) && decl.name ? checker.getSymbolAtLocation(decl.name) : undefined)

  if (!symbol && ts.isVariableDeclaration(decl) && ts.isIdentifier(decl.name)) {
    symbol = checker.getSymbolAtLocation(decl.name)
  }

  if (!symbol) return { description: '', jsDocTags: [] }

  const description = displayPartsToString(symbol.getDocumentationComment(checker))
  const jsDocTags = symbol.getJsDocTags().map(t => ({
    name: t.name,
    text: Array.isArray(t.text) ? displayPartsToString(t.text) : t.text || '',
  }))

  return { description, jsDocTags }
}
