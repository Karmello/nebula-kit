import { pascalCase } from 'change-case'

import { LIB_PREFIX } from 'lib/constants'

export const getDataAttrName = (namespace: string, propName: string) => {
  return `${LIB_PREFIX}${namespace}${pascalCase(propName)}`
}
