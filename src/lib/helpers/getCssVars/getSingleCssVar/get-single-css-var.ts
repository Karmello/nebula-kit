import { kebabCase } from 'lodash'

import { BREAKPOINTS, CompWithCssVarsPrefix, LIB_PREFIX } from 'lib/definitions'

import { GetCssVarsProps } from '../get-css-vars'
import { formatCssVarValue } from '../formatCssVarValue'

export const getSingleCssVar = (
  prefix: CompWithCssVarsPrefix,
  props: GetCssVarsProps<string | number>,
  propName: string
) => {
  const propValue = props[propName]
  const cssVars: Record<string, typeof propValue> = {}

  if (propValue === undefined) {
    return cssVars
  }

  const propNameKebab = kebabCase(propName)

  if (typeof propValue === 'object') {
    BREAKPOINTS.forEach(bp => {
      if (propValue[bp] !== undefined) {
        cssVars[`--${LIB_PREFIX}-${prefix}-${propNameKebab}-${bp}`] = formatCssVarValue(
          propName,
          propValue[bp]
        )
      }
    })
  } else {
    cssVars[`--${LIB_PREFIX}-${prefix}-${propNameKebab}-base`] = formatCssVarValue(propName, propValue)
  }

  return cssVars
}
