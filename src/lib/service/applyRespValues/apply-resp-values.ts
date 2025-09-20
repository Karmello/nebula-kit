import { RefObject } from 'react'
import isNil from 'lodash-es/isNil.js'
import isObject from 'lodash-es/isObject.js'

import { Breakpoint, BREAKPOINTS, RespValue } from 'lib/definitions'
import { scale } from 'lib/helpers'

type ValuesType = 'style' | 'dataset'
type InputValues = Record<string, RespValue<string | number> | undefined>
type Bucket = Record<string, string>

const KEEP_NUMBER_PROPS = ['lineHeight', 'opacity', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'order']

const isBlank = (v: unknown): v is '' => typeof v === 'string' && v === ''

const formatCssValue = (propName: string, propValue: string | number): string => {
  if (typeof propValue === 'number') {
    if (KEEP_NUMBER_PROPS.includes(propName)) {
      return String(propValue)
    } else if (propName === 'columns') {
      return `repeat(${propValue}, 1fr)`
    } else {
      return scale(propValue) || ''
    }
  } else {
    return propValue
  }
}

const getRespValuesPerBp = (type: ValuesType, breakpoint: Breakpoint, values: InputValues): Bucket => {
  const bucket: Bucket = {}

  for (const name in values) {
    const value = values[name]

    if (isNil(value)) {
      continue
    }

    if (breakpoint === 'base' || isObject(value)) {
      const finalValue = isObject(value) ? value[breakpoint] : value
      if (!isNil(finalValue) && !isBlank(finalValue)) {
        if (type === 'style') {
          bucket[name] = formatCssValue(name, finalValue)
        } else if (type === 'dataset') {
          bucket[name] = String(finalValue)
        }
      }
    }
  }

  return bucket
}

export const applyRespValues = (
  type: ValuesType,
  ref: RefObject<any>,
  breakpoint: Breakpoint,
  values: InputValues
): void => {
  if (!ref.current) {
    return
  }

  let mergedBucket: Bucket = {}

  for (const bp of BREAKPOINTS) {
    const bucket = getRespValuesPerBp(type, bp, values)
    mergedBucket = { ...mergedBucket, ...bucket }
    if (bp === breakpoint) break
  }

  for (const name in values) {
    if (!isNil(values[name])) {
      ref.current[type][name] = ''
    }
  }

  for (const name in mergedBucket) {
    ref.current[type][name] = mergedBucket[name]
  }
}
