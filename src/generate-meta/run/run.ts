import path from 'path'
import fs from 'fs'

import { ComponentMeta } from 'lib/definitions'

import { initProgram } from './initProgram/init-program'
import { getDefaultProps } from '../getDefaultProps/get-default-props'
import { getPropsFromExport } from '../getPropsFromExport/get-props-from-export'
import { getComponentMeta } from '../getComponentMeta/get-component-docs'

const program = initProgram('tsconfig.json')

export const run = (source: string, componentName: string, propsName: string, out: string) => {
  const props = getPropsFromExport(program, source, propsName)
  const defaultProps = componentName ? getDefaultProps(program, source, componentName) : {}

  const allProps = props.map(p => ({
    ...p,
    defaultValue: defaultProps[p.name as never] ?? '',
  }))

  const { description } = getComponentMeta(program, source, componentName)

  fs.mkdirSync(path.dirname(out), { recursive: true })

  const componentMeta: ComponentMeta = {
    name: componentName,
    description,
    props: allProps,
  }

  fs.writeFileSync(out, JSON.stringify(componentMeta, null, 2))

  console.log(`✓ Wrote ${out}`)
}
