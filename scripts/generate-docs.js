const ts = require('typescript')
const fs = require('fs')
const path = require('path')
const { kebabCase } = require('change-case')

const getDefaultProps = (program, source, componentName) => {
  const sf = program.getSourceFile(source)
  const defaults = {}

  const visit = node => {
    if (ts.isVariableStatement(node)) {
      for (const d of node.declarationList.declarations) {
        if (
          ts.isIdentifier(d.name) &&
          d.name.text === componentName &&
          d.initializer &&
          ts.isCallExpression(d.initializer)
        ) {
          const fn = d.initializer.arguments?.[0]
          if (fn && (ts.isArrowFunction(fn) || ts.isFunctionExpression(fn))) {
            const firstParam = fn.parameters[0]
            if (firstParam && firstParam.name && ts.isObjectBindingPattern(firstParam.name)) {
              for (const el of firstParam.name.elements) {
                if (ts.isBindingElement(el) && el.initializer && ts.isIdentifier(el.name)) {
                  defaults[el.name.text] = el.initializer.getText(sf)
                }
              }
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit)
  }

  ts.forEachChild(sf, visit)
  return defaults
}

const getPropsFromExport = (program, source, propsName) => {
  const checker = program.getTypeChecker()
  const sf = program.getSourceFile(source)

  if (!sf) {
    throw new Error(`No source file: ${source}`)
  }

  const moduleSymbol = checker.getSymbolAtLocation(sf)
  const moduleExports = checker.getExportsOfModule(moduleSymbol)
  const sym = moduleExports.find(s => s.escapedName === propsName)

  if (!sym) {
    throw new Error(`Export ${propsName} not found in ${source}`)
  }

  const type = checker.getDeclaredTypeOfSymbol(sym)
  const props = checker.getPropertiesOfType(type)

  return props.map(p => {
    const decl = p.valueDeclaration || (p.declarations ? p.declarations[0] : undefined)
    const t = checker.getTypeOfSymbolAtLocation(p, decl ?? sf)
    const isOptional = (p.getFlags() & ts.SymbolFlags.Optional) !== 0 || (decl && !!decl.questionToken)

    let options = []

    if (t.isUnion()) {
      options = t.types
        .filter(tt => tt.flags & ts.TypeFlags.StringLiteral || tt.flags & ts.TypeFlags.NumberLiteral)
        .map(tt => tt.value)
    }

    return {
      name: p.getName(),
      type: checker.typeToString(t),
      optional: isOptional,
      options,
    }
  })
}

const run = (program, source, componentName, propsName, out) => {
  const props = getPropsFromExport(program, source, propsName)
  const defaults = componentName ? getDefaultProps(program, source, componentName) : {}

  const merged = props.map(p => ({
    ...p,
    defaultValue: defaults[p.name] ?? undefined,
  }))

  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, JSON.stringify(merged, null, 2))
  console.log(`✓ Wrote ${out}`)
}

const initProgram = tsConfig => {
  const configPath = ts.findConfigFile('.', ts.sys.fileExists, tsConfig)
  const config = ts.readConfigFile(configPath, ts.sys.readFile).config
  const parsed = ts.parseJsonConfigFileContent(config, ts.sys, path.dirname(configPath))
  return ts.createProgram(parsed.fileNames, parsed.options)
}

const libComponentNames = fs
  .readdirSync('src/lib/components', { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name)

const program = initProgram('tsconfig.json')

libComponentNames.forEach(name => {
  try {
    run(
      program,
      `src/lib/components/${name}/${kebabCase(name)}.tsx`,
      name,
      `${name}Props`,
      `src/docs/${name}/${kebabCase(name)}.props.json`
    )
  } catch (ex) {
    console.error(ex)
  }
})
