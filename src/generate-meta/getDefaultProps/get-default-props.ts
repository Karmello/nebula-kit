import ts, { Node, Program } from 'typescript'

export const getDefaultProps = (program: Program, source: string, componentName: string) => {
  const sf = program.getSourceFile(source)
  if (!sf) throw new Error(`No source file: ${source}`)
  const checker = program.getTypeChecker()
  const defaults: Record<string, string> = {}

  // --- helpers ---------------------------------------------------------------

  // Strip type assertions and wrappers: "('div' as E)", "<E>'div'", "'x' as const", "expr satisfies T", parentheses
  const unwrapValue = (expr: ts.Expression): ts.Expression => {
    let e: ts.Expression = expr
    // unwrap loops in case of nested assertions/paren
    for (;;) {
      if (ts.isAsExpression(e)) {
        e = e.expression
        continue
      }
      if (ts.isTypeAssertionExpression(e)) {
        e = e.expression
        continue
      }
      if ((ts as any).isSatisfiesExpression?.(e)) {
        e = (e as any).expression
        continue
      }
      if (ts.isParenthesizedExpression(e)) {
        e = e.expression
        continue
      }
      break
    }
    return e
  }

  // Try to resolve enum members like Language.DEFAULT -> 'en' or 0
  const resolveEnumMemberLiteral = (expr: ts.Expression): string | number | undefined => {
    const e = unwrapValue(expr)
    const targetNode = ts.isPropertyAccessExpression(e) ? e.name : e
    let sym = checker.getSymbolAtLocation(targetNode)
    if (!sym) return

    if (sym.flags & ts.SymbolFlags.Alias) {
      sym = checker.getAliasedSymbol(sym)
    }

    const decl = (sym.valueDeclaration ?? sym.declarations?.[0]) as ts.Declaration | undefined
    if (!decl || !ts.isEnumMember(decl)) return

    const init = decl.initializer
    if (init) {
      if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) return init.text
      if (ts.isNumericLiteral(init)) return Number(init.text)
      if (ts.isPrefixUnaryExpression(init) && ts.isNumericLiteral(init.operand)) {
        const n = Number(init.operand.text)
        return init.operator === ts.SyntaxKind.MinusToken ? -n : n
      }
    }

    const enumDecl = decl.parent
    if (ts.isEnumDeclaration(enumDecl)) {
      let current = 0
      for (const m of enumDecl.members) {
        if (m === decl) return current
        if (m.initializer) {
          if (ts.isNumericLiteral(m.initializer)) current = Number(m.initializer.text)
          else if (ts.isPrefixUnaryExpression(m.initializer) && ts.isNumericLiteral(m.initializer.operand)) {
            const n = Number(m.initializer.operand.text)
            current = m.initializer.operator === ts.SyntaxKind.MinusToken ? -n : n
          } else {
            return
          }
        }
        current += 1
      }
    }
    return
  }

  const recordDefault = (key: string, valueNode: ts.Expression) => {
    const unwrapped = unwrapValue(valueNode)

    // 1) Enums → literal values when possible
    const maybeEnum = resolveEnumMemberLiteral(unwrapped)
    if (maybeEnum !== undefined) {
      defaults[key] = String(maybeEnum)
      return
    }

    // 2) Clean literal text (e.g., "'div'") or any other expression without the type coercion suffix
    defaults[key] = unwrapped.getText(sf)
  }

  // Extract defaults from an ObjectBindingPattern like: ({ a = 1, b: c = 2 })
  const collectFromBinding = (binding: ts.ObjectBindingPattern) => {
    for (const el of binding.elements) {
      const nameNode = el.name
      const key = ts.isIdentifier(nameNode) ? nameNode.text : undefined
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

    if (firstParam.name && ts.isObjectBindingPattern(firstParam.name)) {
      collectFromBinding(firstParam.name)
    }
    collectFromParamDefaultObject(firstParam)
  }

  const visit = (node: Node) => {
    // 1) const Component = (...) => {}
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (!ts.isIdentifier(decl.name) || decl.name.text !== componentName) continue
        const init = decl.initializer
        if (!init) continue

        if (ts.isArrowFunction(init) || ts.isFunctionExpression(init)) {
          handleComponentFunction(init)
        }

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
