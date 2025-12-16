import { pascalCase } from 'change-case'

import { LIB_PREFIX } from 'lib/definitions'

import { ComponentName } from './update-dom-resp-dataset'

export const getDataAttrName = (componentName: ComponentName, propName: string) => {
  return `${LIB_PREFIX}${componentName}${pascalCase(propName)}`
}
