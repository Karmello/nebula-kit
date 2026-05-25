import { kebabCase } from 'change-case'

import { LIB_PREFIX } from 'lib/definitions'

import { ComponentName } from './definitions'

export const getDataAttrs = (componentName: ComponentName, propValues: Record<string, unknown>, propName: string) => {
  const propValue = propValues[propName]
  const dataAttrs: Record<string, typeof propValue> = {}

  if (propValue === undefined) {
    return dataAttrs
  }

  dataAttrs[`data-${LIB_PREFIX}-${kebabCase(componentName)}-${kebabCase(propName)}`] = propValue
  return dataAttrs
}
