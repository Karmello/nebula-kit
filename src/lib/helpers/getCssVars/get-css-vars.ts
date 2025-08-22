import { ResponsiveProp, CompWithCssVarsPrefix } from 'lib-2/definitions'

import { getSingleCssVar } from './getSingleCssVar'

export type GetCssVarsProps<T> = Record<string, ResponsiveProp<T>>

export const getCssVars = (prefix: CompWithCssVarsPrefix, props: GetCssVarsProps<string | number>) => {
  let cssVars = {}

  if (props) {
    Object.keys(props).forEach(name => {
      cssVars = {
        ...cssVars,
        ...getSingleCssVar(prefix, props, name),
      }
    })
  }

  return cssVars
}
