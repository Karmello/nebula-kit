import { kebabCase } from 'lodash'

import { LIB_PREFIX } from 'lib/definitions'

const getDataAttr = (prefix: string, props: Record<string, unknown>, propName: string) => {
  const propValue = props[propName]
  const dataAttrs: Record<string, typeof propValue> = {}

  if (propValue === undefined) {
    return dataAttrs
  }

  dataAttrs[`data-${LIB_PREFIX}-${prefix}-${kebabCase(propName)}`] = propValue
  return dataAttrs
}

export const getDataAttrs = (prefix: string, props: Record<string, unknown>) => {
  let dataAttrs = {}

  if (props) {
    for (const propName in props) {
      dataAttrs = {
        ...dataAttrs,
        ...getDataAttr(prefix, props, propName),
      }
    }
  }

  return dataAttrs
}
