import ts, { Node, Program } from 'typescript'

export const getDefaultProps = (program: Program, source: string, componentName: string) => {
  const sf = program.getSourceFile(source)
  if (!sf) throw new Error(`No source file: ${source}`)
  const checker = program.getTypeChecker()
  const defaults: Record<string, string> = {}

  // --- helpers ---------------------------------------------------------------

  const unwrapValue = (expr: ts.Expression): ts.Expression => {
    let e: ts.Expression = expr
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

  const resolveEnumMemberLiteral = (expr: ts.Expression): string | number | undefined => {
    const e = unwrapValue(expr)
    const targetNode = ts.isPropertyAccessExpression(e) ? e.name : e
    let sym = checker.getSymbolAtLocation(targetNode)
    if (!sym) return
    if (sym.flags & ts.SymbolFlags.Alias) {
      try {
        sym = checker.getAliasedSymbol(sym)
        // eslint-disable-next-line no-empty
      } catch {}
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

  const getResolvedSymbol = (node: ts.Node): ts.Symbol | undefined => {
    let sym = checker.getSymbolAtLocation(node)
    if (!sym) return
    if (sym.flags & ts.SymbolFlags.Alias) {
      try {
        sym = checker.getAliasedSymbol(sym)
        // eslint-disable-next-line no-empty
      } catch {}
    }
    return sym
  }

  const getInitializerFromSymbol = (sym: ts.Symbol): ts.Expression | undefined => {
    const decl = (sym.valueDeclaration ?? sym.declarations?.[0]) as ts.Declaration | undefined
    if (!decl) return
    if (ts.isVariableDeclaration(decl) && decl.initializer) return decl.initializer
    if (ts.isPropertyAssignment(decl) && decl.initializer) return decl.initializer
    if (ts.isShorthandPropertyAssignment(decl)) {
      const s = getResolvedSymbol(decl.name)
      return s ? getInitializerFromSymbol(s) : undefined
    }
    return
  }

  const getPropFromObjectLiteral = (
    obj: ts.ObjectLiteralExpression,
    key: string
  ): ts.Expression | undefined => {
    for (const p of obj.properties) {
      if (!ts.isPropertyAssignment(p) && !ts.isShorthandPropertyAssignment(p)) continue
      const nameNode = ts.isPropertyAssignment(p) ? p.name : p.name
      let name: string | undefined
      if (ts.isIdentifier(nameNode)) name = nameNode.text
      else if (ts.isStringLiteral(nameNode) || ts.isNumericLiteral(nameNode)) name = nameNode.text
      if (name === key) {
        if (ts.isPropertyAssignment(p)) return p.initializer
        if (ts.isShorthandPropertyAssignment(p)) {
          const s = getResolvedSymbol(p.name)
          return s ? getInitializerFromSymbol(s) : undefined
        }
      }
    }
    return
  }

  const resolvePropertyAccessChain = (expr: ts.Expression, depth = 0): ts.Expression | undefined => {
    if (depth > 10) return
    const e = unwrapValue(expr)

    if (ts.isIdentifier(e)) {
      const sym = getResolvedSymbol(e)
      if (!sym) return
      const init = getInitializerFromSymbol(sym)
      if (!init) return
      return unwrapValue(init)
    }

    if (ts.isPropertyAccessExpression(e)) {
      // NEW: try resolving the whole A.B via symbol (covers namespace imports / re-exports)
      const paSym = getResolvedSymbol(e)
      if (paSym) {
        const init = getInitializerFromSymbol(paSym)
        if (init) return resolvePropertyAccessChain(init, depth + 1) ?? unwrapValue(init)
      }

      // Then try resolving base → object literal
      const base = resolvePropertyAccessChain(e.expression, depth + 1) ?? unwrapValue(e.expression)

      if (ts.isObjectLiteralExpression(base)) {
        const propInit = getPropFromObjectLiteral(base, e.name.text)
        if (propInit) return resolvePropertyAccessChain(propInit, depth + 1) ?? unwrapValue(propInit)
      }

      if (ts.isIdentifier(base)) {
        const sym = getResolvedSymbol(base)
        const init = sym ? getInitializerFromSymbol(sym) : undefined
        if (init && ts.isObjectLiteralExpression(unwrapValue(init))) {
          const obj = unwrapValue(init) as ts.ObjectLiteralExpression
          const propInit = getPropFromObjectLiteral(obj, e.name.text)
          if (propInit) return resolvePropertyAccessChain(propInit, depth + 1) ?? unwrapValue(propInit)
        }
      }
      return
    }

    if (ts.isElementAccessExpression(e)) {
      const arg = e.argumentExpression && unwrapValue(e.argumentExpression)
      const key =
        arg && (ts.isStringLiteral(arg) || ts.isNoSubstitutionTemplateLiteral(arg) || ts.isIdentifier(arg))
          ? ts.isIdentifier(arg)
            ? arg.text
            : arg.text
          : undefined
      if (!key) return
      const base = resolvePropertyAccessChain(e.expression, depth + 1) ?? unwrapValue(e.expression)
      if (ts.isObjectLiteralExpression(base)) {
        const propInit = getPropFromObjectLiteral(base, key)
        if (propInit) return resolvePropertyAccessChain(propInit, depth + 1) ?? unwrapValue(propInit)
      }
      if (ts.isIdentifier(base)) {
        const sym = getResolvedSymbol(base)
        const init = sym ? getInitializerFromSymbol(sym) : undefined
        if (init && ts.isObjectLiteralExpression(unwrapValue(init))) {
          const obj = unwrapValue(init) as ts.ObjectLiteralExpression
          const propInit = getPropFromObjectLiteral(obj, key)
          if (propInit) return resolvePropertyAccessChain(propInit, depth + 1) ?? unwrapValue(propInit)
        }
      }
      return
    }

    return e
  }

  const recordDefault = (key: string, valueNode: ts.Expression) => {
    const unwrapped = unwrapValue(valueNode)

    const maybeEnum = resolveEnumMemberLiteral(unwrapped)
    if (maybeEnum !== undefined) {
      defaults[key] = String(maybeEnum)
      return
    }

    const resolved = resolvePropertyAccessChain(unwrapped)
    if (resolved && resolved !== unwrapped) {
      const clean = unwrapValue(resolved)
      defaults[key] = clean.getText() // FIX: use node's own source file
      return
    }

    defaults[key] = unwrapped.getText() // FIX: use node's own source file
  }

  const collectFromBinding = (binding: ts.ObjectBindingPattern) => {
    for (const el of binding.elements) {
      const nameNode = el.name
      const key = ts.isIdentifier(nameNode) ? nameNode.text : undefined
      if (el.initializer && key) recordDefault(key, el.initializer)
    }
  }

  const collectFromParamDefaultObject = (param: ts.ParameterDeclaration) => {
    if (!param.initializer || !ts.isObjectLiteralExpression(param.initializer)) return
    for (const prop of param.initializer.properties) {
      if (!ts.isPropertyAssignment(prop)) continue
      const key = ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name) ? prop.name.text : undefined
      if (key) recordDefault(key, prop.initializer)
    }
  }

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
