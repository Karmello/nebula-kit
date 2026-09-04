import { kebabCase } from 'change-case'

import { LIB_PREFIX } from 'lib/constants'

export const getDataAttrs = (
  namespace: string,
  propValues: Record<string, unknown>,
  propName: string
) => {
  const propValue = propValues[propName]
  const dataAttrs: Record<string, typeof propValue> = {}

  if (propValue === undefined) {
    return dataAttrs
  }

  dataAttrs[`data-${LIB_PREFIX}-${kebabCase(namespace)}-${kebabCase(propName)}`] = propValue
  return dataAttrs
}
