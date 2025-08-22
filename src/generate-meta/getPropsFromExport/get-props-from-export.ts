import { Program } from 'typescript'

import { ComponentMeta } from 'lib/definitions'

import { getSymbolDocs } from './getSymbolDocs/get-symbol-docs'
import { displayTypeExact } from './displayTypeExact/display-type-exact'
import { getOptions } from './getOptions/get-options'
import { isRequired } from './isRequired/is-required'

export const getPropsFromExport = (
  program: Program,
  source: string,
  propsName: string
): ComponentMeta['props'] => {
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

  return props.map(prop => {
    const decl = prop.valueDeclaration || (prop.declarations ? prop.declarations[0] : undefined)
    const t = checker.getTypeOfSymbolAtLocation(prop, decl ?? sf)

    const typeExact = displayTypeExact(checker, t, decl, sf)
    const { description, jsDocTags } = getSymbolDocs(checker, prop)

    const propMeta = {
      name: prop.getName(),
      type: typeExact,
      options: getOptions(checker, t),
      required: isRequired(prop, decl),
      defaultValue: '',
      description: description || '',
    }

    return propMeta
  })
}
