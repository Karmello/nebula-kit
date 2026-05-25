import { RefObject } from 'react'

import { Breakpoint, BREAKPOINTS } from 'lib/definitions'

import { getBucketPerBp } from './get-bucket-per-bp'
import { getDataAttrName } from './get-data-attr-name'
import { Bucket, PropValues } from '../definitions'

export const syncRespDataset = (
  namespace: string,
  elemRef: RefObject<any>,
  breakpoint: Breakpoint,
  propValues: PropValues
): void => {
  // Bail early if the DOM node is not available
  if (!elemRef.current) return

  // -------------------------------------
  // 1. Collect only props that actively
  //    participate in dataset resolution.
  //    (undefined means "not controlled")
  // -------------------------------------
  const activePropValues: PropValues = {}
  for (const propName in propValues) {
    const propValue = propValues[propName]
    if (propValue !== undefined) {
      activePropValues[propName] = propValue
    }
  }

  // -------------------------------------
  // 2. Track previously applied semantic
  //    props for this component instance.
  //    Used to determine removals and cleanup
  // -------------------------------------
  const storeKey = 'neb_resp_dataset_' + namespace.toLowerCase()
  const prevPropNames: Set<string> = elemRef.current[storeKey] || new Set()
  const currentPropNames = new Set(Object.keys(activePropValues))

  // -------------------------------------
  // 3. Resolve responsive dataset values
  //    up to the current breakpoint using
  //    progressive inheritance
  //    (base → current breakpoint)
  // -------------------------------------
  const mergedBucket: Bucket = {}

  for (const bp of BREAKPOINTS) {
    const bucket = getBucketPerBp(namespace, bp, activePropValues)
    for (const key in bucket) {
      mergedBucket[key] = bucket[key]
    }
    if (bp === breakpoint) break
  }

  // -------------------------------------
  // 4. Remove dataset attributes that were
  //    previously controlled but are no
  //    longer present and not inherited
  // -------------------------------------
  for (const propName of prevPropNames) {
    const domAttrName = getDataAttrName(namespace, propName)
    if (!currentPropNames.has(propName) && !(domAttrName in mergedBucket)) {
      delete elemRef.current.dataset[domAttrName]
    }
  }

  // -------------------------------------
  // 5. Synchronize resolved dataset attrs
  //    without redundant DOM mutations
  // -------------------------------------
  for (const propName in mergedBucket) {
    const nextValue = mergedBucket[propName]

    if (elemRef.current.dataset[propName] !== nextValue) {
      elemRef.current.dataset[propName] = nextValue
    }
  }

  // -------------------------------------
  // 6. Persist current semantic prop names
  //    for the next update cycle
  // -------------------------------------
  elemRef.current[storeKey] = currentPropNames
}
