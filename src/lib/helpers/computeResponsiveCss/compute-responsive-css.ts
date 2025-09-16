import { RefObject, CSSProperties, ComponentRef } from 'react'
import isNil from 'lodash-es/isNil.js'

import { Breakpoint, ResponsiveProp, BREAKPOINTS } from 'lib/definitions'

import { getCssValuesPerBp } from './getCssValuesPerBp'

export type ResponsiveProps<T> = Partial<Record<keyof CSSProperties, ResponsiveProp<T>>>
export type Bucket = Partial<Record<keyof CSSProperties, unknown>>

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
