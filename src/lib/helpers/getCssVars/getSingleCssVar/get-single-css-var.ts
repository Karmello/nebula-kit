import { kebabCase } from 'lodash'

import { BREAKPOINTS, CSS_VARS_CONFIG, CompWithCssVarsPrefix } from 'lib/definitions'

import { GetCssVarsProps } from '../get-css-vars'
import { formatCssVarValue } from '../formatCssVarValue'

export const getSingleCssVar = (
  prefix: CompWithCssVarsPrefix,
  props: GetCssVarsProps<string | number>,
  propName: string
) => {
  const propValue = props[propName]
  const cssVars: Record<string, typeof propValue> = {}

  if (propValue === undefined || propValue === CSS_VARS_CONFIG[prefix][propName as never]) {
    return cssVars
  }

  const propNameKebab = kebabCase(propName)
  let currentValue = CSS_VARS_CONFIG[prefix][propName as never] as string | number

  BREAKPOINTS.forEach(bp => {
    if (typeof propValue === 'object') {
      if (propValue[bp] !== undefined) currentValue = propValue[bp]
    } else {
      if (propValue !== undefined) currentValue = propValue
    }
    cssVars[`--${prefix}-${propNameKebab}-${bp}`] = formatCssVarValue(propName, currentValue)
  })

  return cssVars
}
