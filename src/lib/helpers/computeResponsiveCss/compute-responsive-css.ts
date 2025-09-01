import { RefObject, CSSProperties } from 'react'
import isNil from 'lodash/isNil'
import isObject from 'lodash/isObject'

import { Breakpoint, ResponsiveProp, BREAKPOINTS } from 'lib/definitions'

import { formatCssValue } from './formatCssValue'

type ResponsiveProps<T> = Partial<Record<keyof CSSProperties, ResponsiveProp<T>>>

export const computeResponsiveCss = (
  ref: RefObject<HTMLElement>,
  breakpoint: Breakpoint,
  props: ResponsiveProps<string | number>
) => {
  if (!ref.current) {
    return
  }

  for (const propName in props) {
    const propValue = props[propName as never]

    if (!isNil(propValue)) {
      if (!isObject(propValue)) {
        ref.current.style[propName as never] = formatCssValue(propName, propValue)
      } else {
        for (const bp of BREAKPOINTS) {
          const bpValue = propValue[bp]

          if (!isNil(bpValue)) {
            ref.current.style[propName as never] = formatCssValue(propName, bpValue)
          }

          if (bp === breakpoint) {
            break
          }
        }
      }
    }
  }
}
