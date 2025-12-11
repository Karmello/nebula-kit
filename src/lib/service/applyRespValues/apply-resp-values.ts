import { RefObject } from 'react'
import { pascalCase } from 'change-case'
import isNil from 'lodash-es/isNil.js'
import isObject from 'lodash-es/isObject.js'

import { Breakpoint, BREAKPOINTS, LIB_PREFIX, RespValue } from 'lib/definitions'

type ValuesType = 'style' | 'dataset'
type InputValues = Record<string, RespValue<string | number | boolean> | undefined>
type Bucket = Record<string, string>

const KEEP_NUMBER_PROPS = ['lineHeight', 'opacity', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'order']

const isBlank = (v: unknown): v is '' => typeof v === 'string' && v === ''

const formatCssValue = (propName: string, propValue: string | number | boolean): string => {
  if (typeof propValue === 'number') {
    if (KEEP_NUMBER_PROPS.includes(propName)) {
      return String(propValue)
    } else if (propName === 'columns') {
      return `repeat(${propValue}, 1fr)`
    } else {
      return String(propValue) || ''
    }
  } else {
    return String(propValue)
  }
}

const getDataAttrName = (prefix: string | undefined, name: string) =>
  `${LIB_PREFIX}${prefix}${pascalCase(name)}`

const getRespValuesPerBp = (
  type: ValuesType,
  breakpoint: Breakpoint,
  values: InputValues,
  prefix?: string
): Bucket => {
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
          bucket[getDataAttrName(prefix, name)] = String(finalValue)
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
  values: InputValues,
  prefix?: string
): void => {
  if (!ref.current) return

  // -------------------------------------
  // 1. FILTER OUT top-level undefined props
  //    (but keep responsive objects intact)
  // -------------------------------------
  const filteredValues: InputValues = {}
  for (const key in values) {
    const v = values[key]
    if (v !== undefined) {
      filteredValues[key] = v
    }
  }

  // -------------------------------------
  // 2. Track which keys were passed before
  // -------------------------------------
  const appliedKeyStoreName = '__nkPrevUserKeys_' + type
  const prevUserKeys: Set<string> = ref.current[appliedKeyStoreName] || new Set()
  const currentUserKeys = new Set(Object.keys(filteredValues))

  // -------------------------------------
  // 3. Build merged responsive bucket
  // -------------------------------------
  let mergedBucket: Bucket = {}

  for (const bp of BREAKPOINTS) {
    const bucket = getRespValuesPerBp(type, bp, filteredValues, prefix)
    mergedBucket = { ...mergedBucket, ...bucket }
    if (bp === breakpoint) break
  }

  // -------------------------------------
  // 4. Reset removed keys
  //    (key used to exist, now removed, AND no inherited value)
  // -------------------------------------
  for (const key of prevUserKeys) {
    const domKey = type === 'dataset' ? getDataAttrName(prefix, key) : key
    if (!currentUserKeys.has(key) && !(domKey in mergedBucket)) {
      ref.current[type][domKey] = ''
    }
  }

  // -------------------------------------
  // 5. Reset keys that have actual values
  //    (same behavior as original implementation)
  // -------------------------------------
  for (const name in filteredValues) {
    const val = filteredValues[name]
    if (!isNil(val) && !isBlank(val)) {
      const domKey = type === 'dataset' ? getDataAttrName(prefix, name) : name
      ref.current[type][domKey] = ''
    }
  }

  // -------------------------------------
  // 6. Apply merged final values
  // -------------------------------------
  for (const name in mergedBucket) {
    ref.current[type][name] = mergedBucket[name]
  }

  // -------------------------------------
  // 7. Save current user keys
  // -------------------------------------
  ref.current[appliedKeyStoreName] = currentUserKeys
}
