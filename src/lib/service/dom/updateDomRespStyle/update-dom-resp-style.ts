import { RefObject } from 'react'

import { Breakpoint, BREAKPOINTS } from 'lib/definitions'
import { Bucket, PropValues, isBlank } from '../definitions'
import { getBucketPerBp } from './get-bucket-per-bp'

export const updateDomRespStyle = (
  componentName: 'Box' | 'Flex' | 'Flex.Item' | 'Grid' | 'Grid.Item',
  elemRef: RefObject<any>,
  breakpoint: Breakpoint,
  propValues: PropValues
): void => {
  if (!elemRef.current) return

  // -------------------------------------
  // 1. Collect controlled props
  //    (undefined = uncontrolled)
  // -------------------------------------
  const activePropValues: PropValues = {}
  for (const propName in propValues) {
    if (propValues[propName] !== undefined) {
      activePropValues[propName] = propValues[propName]
    }
  }

  // -------------------------------------
  // 2. Resolve merged bucket
  //    (base → current breakpoint)
  // -------------------------------------
  let mergedBucket: Bucket = {}

  for (const bp of BREAKPOINTS) {
    const bucket = getBucketPerBp(bp, activePropValues)
    mergedBucket = { ...mergedBucket, ...bucket }
    if (bp === breakpoint) break
  }

  // -------------------------------------
  // 3. Cleanup previously applied styles
  // -------------------------------------
  const storeKey = 'neb_resp_style_' + componentName.toLowerCase()
  const prevApplied: Set<string> = elemRef.current[storeKey] || new Set()
  const nextApplied = new Set(Object.keys(mergedBucket))

  for (const propName of prevApplied) {
    if (!nextApplied.has(propName)) {
      elemRef.current.style[propName] = ''
    }
  }

  // -------------------------------------
  // 4. Apply resolved styles
  // -------------------------------------
  for (const propName in mergedBucket) {
    const value = mergedBucket[propName]
    if (!isBlank(value)) {
      elemRef.current.style[propName] = value
    }
  }

  // -------------------------------------
  // 5. Persist applied keys
  // -------------------------------------
  elemRef.current[storeKey] = nextApplied
}
