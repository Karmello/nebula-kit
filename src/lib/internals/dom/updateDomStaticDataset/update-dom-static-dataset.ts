import { getDataAttrs } from './get-data-attrs'
import { ComponentName } from './definitions'

export const updateDomStaticDataset = (componentName: ComponentName, props: Record<string, unknown>) => {
  const dataAttrs: Record<string, unknown> = {}

  for (const propName in props) {
    Object.assign(dataAttrs, getDataAttrs(componentName, props, propName))
  }

  return dataAttrs
}
