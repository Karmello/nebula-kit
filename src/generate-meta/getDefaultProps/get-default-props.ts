import ts, { Node, Program } from 'typescript'

export const getDefaultProps = (program: Program, source: string, componentName: string) => {
  const sf = program.getSourceFile(source)
  if (!sf) throw new Error(`No source file: ${source}`)
  const defaults: Record<string, string> = {}

  const recordDefault = (key: string, valueNode: ts.Expression) => {
    defaults[key] = valueNode.getText(sf)
  }

  // Extract defaults from an ObjectBindingPattern like: ({ a = 1, b: c = 2 })
  const collectFromBinding = (binding: ts.ObjectBindingPattern) => {
    for (const el of binding.elements) {
      // el.name can be Identifier or another pattern; support alias `{ a: aa = 1 }`
      const nameNode = el.name
      const key = ts.isIdentifier(nameNode)
        ? nameNode.text
        : ts.isObjectBindingPattern(nameNode) || ts.isArrayBindingPattern(nameNode)
          ? undefined
          : undefined

      if (el.initializer && key) {
        recordDefault(key, el.initializer)
      }
    }
  }

  // Extract defaults from param default object: ( { a } = { a: 1 } )
  const collectFromParamDefaultObject = (param: ts.ParameterDeclaration) => {
    if (!param.initializer || !ts.isObjectLiteralExpression(param.initializer)) return
    for (const prop of param.initializer.properties) {
      if (!ts.isPropertyAssignment(prop)) continue
      const key = ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name) ? prop.name.text : undefined
      if (key) recordDefault(key, prop.initializer)
    }
  }

  // Given any node, peel off HOCs until you find an ArrowFunction/FunctionExpression
  const findInnerFunction = (node: ts.Node): ts.ArrowFunction | ts.FunctionExpression | undefined => {
    if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) return node
    if (ts.isCallExpression(node)) {
      // look through arguments for an inline function
      for (const arg of node.arguments) {
        const found = findInnerFunction(arg)
        if (found) return found
      }
    }
    if (ts.isParenthesizedExpression(node)) return findInnerFunction(node.expression)
    return undefined
  }

  const handleComponentFunction = (fn: ts.ArrowFunction | ts.FunctionExpression) => {
    const firstParam = fn.parameters[0]
    if (!firstParam) return

    // Case 1: destructuring with per-property defaults: ({ a = 1, b: c = 2 })
    if (firstParam.name && ts.isObjectBindingPattern(firstParam.name)) {
      collectFromBinding(firstParam.name)
    }

    // Case 2: param has a default object: ({ a } = { a: 1 })
    collectFromParamDefaultObject(firstParam)
  }

  const visit = (node: Node) => {
    // 1) const Component = (...) => {}
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (!ts.isIdentifier(decl.name) || decl.name.text !== componentName) continue
        const init = decl.initializer
        if (!init) continue

        // Direct arrow/function: const C = ({ a = 1 }) => {}
        if (ts.isArrowFunction(init) || ts.isFunctionExpression(init)) {
          handleComponentFunction(init)
        }

        // HOC-wrapped: const C = withX(withY(( { a = 1 } ) => {}))
        const inner = findInnerFunction(init)
        if (inner) handleComponentFunction(inner)
      }
    }

    // 2) function Component({ a = 1 }) {}
    if (ts.isFunctionDeclaration(node) && node.name?.text === componentName) {
      const params = node.parameters
      if (params.length) {
        const firstParam = params[0]
        if (firstParam.name && ts.isObjectBindingPattern(firstParam.name)) {
          collectFromBinding(firstParam.name)
        }
        collectFromParamDefaultObject(firstParam)
      }
    }

    ts.forEachChild(node, visit)
  }

  ts.forEachChild(sf, visit)
  return defaults
}
