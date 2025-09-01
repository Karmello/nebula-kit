import { RefObject, CSSProperties, ComponentRef } from 'react'
import isNil from 'lodash/isNil'
import isObject from 'lodash/isObject'

import { Breakpoint, ResponsiveProp, BREAKPOINTS } from 'lib/definitions'
import { formatCssValue } from './formatCssValue'

type ResponsiveProps<T> = Partial<Record<keyof CSSProperties, ResponsiveProp<T>>>

type Bucket = Partial<Record<keyof CSSProperties, unknown>>

const getCssValuesPerBp = (breakpoint: Breakpoint, props: ResponsiveProps<string | number>) => {
  const bucket: Bucket = {}

  for (const key in props) {
    const propName = key as keyof CSSProperties
    const propValue = props[propName]

    if (isNil(propValue)) {
      continue
    }

    if (breakpoint === 'base' || isObject(propValue)) {
      const value = isObject(propValue) ? propValue[breakpoint] : propValue
      if (!isNil(value)) {
        bucket[propName] = formatCssValue(propName, value)
      }
    }
  }

  return bucket
}

export const computeResponsiveCss = (
  ref: RefObject<ComponentRef<any>>,
  breakpoint: Breakpoint,
  props: ResponsiveProps<string | number>
) => {
  if (!ref.current) {
    return
  }

  let mergedBucket: Bucket = {}

  for (const bp of BREAKPOINTS) {
    const bucket = getCssValuesPerBp(bp, props)
    mergedBucket = { ...mergedBucket, ...bucket }
    if (bp === breakpoint) {
      break
    }
  }

  for (const propName in props) {
    if (!isNil(props[propName as never])) {
      ;(ref.current as HTMLElement).style[propName as never] = ''
    }
  }

  for (const propName in mergedBucket) {
    ;(ref.current as HTMLElement).style[propName as never] = mergedBucket[propName as never]
  }
}
