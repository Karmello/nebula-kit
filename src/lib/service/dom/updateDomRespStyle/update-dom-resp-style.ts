import { RefObject } from 'react'
import isNil from 'lodash-es/isNil.js'

import { Breakpoint, BREAKPOINTS } from 'lib/definitions'

import { Bucket, PropValues, isBlank } from '../definitions'
import { getBucketPerBp } from './get-bucket-per-bp'

export const updateDomRespStyle = (
  componentName: 'Box' | 'Flex' | 'Flex.Item' | 'Grid' | 'Grid.Item',
  elemRef: RefObject<any>,
  breakpoint: Breakpoint,
  propValues: PropValues
): void => {
  // Bail early if the DOM node is not available
  if (!elemRef.current) return

  // -------------------------------------
  // 1. Collect only props that participate
  //    in responsive resolution.
  //    (undefined means "not controlled")
  // -------------------------------------
  const activePropValues: PropValues = {}
  for (const propName in propValues) {
    const propValue = propValues[propName]
    if (propValue !== undefined) activePropValues[propName] = propValue
  }

  // -------------------------------------
  // 2. Track previously applied style keys
  //    per component type to support cleanup
  // -------------------------------------
  const storeKey = 'neb_resp_style_' + componentName.toLowerCase()
  const prevPropNames: Set<string> = elemRef.current[storeKey] || new Set()
  const currentPropNames = new Set(Object.keys(activePropValues))

  // -------------------------------------
  // 3. Resolve responsive values up to the
  //    current breakpoint using progressive
  //    inheritance (base → current)
  // -------------------------------------
  let mergedBucket: Bucket = {}

  for (const bp of BREAKPOINTS) {
    const bucket = getBucketPerBp(bp, activePropValues)
    mergedBucket = { ...mergedBucket, ...bucket }
    if (bp === breakpoint) break
  }

  // -------------------------------------
  // 4. Clean up style properties that were
  //    previously controlled but are no
  //    longer present and not inherited
  // -------------------------------------
  for (const propName of prevPropNames) {
    if (!currentPropNames.has(propName) && !(propName in mergedBucket)) {
      elemRef.current.style[propName] = ''
    }
  }

  // -------------------------------------
  // 5. Reset controlled style properties
  //    before applying new resolved values
  //    to avoid stale leftovers
  // -------------------------------------
  for (const propName in activePropValues) {
    const propValue = activePropValues[propName]
    if (!isNil(propValue) && !isBlank(propValue)) {
      elemRef.current.style[propName] = ''
    }
  }

  // -------------------------------------
  // 6. Apply final resolved style values
  //    for the current breakpoint
  // -------------------------------------
  for (const propName in mergedBucket) {
    elemRef.current.style[propName] = mergedBucket[propName]
  }

  // -------------------------------------
  // 7. Persist current controlled keys
  //    for the next update cycle
  // -------------------------------------
  elemRef.current[storeKey] = currentPropNames
}
