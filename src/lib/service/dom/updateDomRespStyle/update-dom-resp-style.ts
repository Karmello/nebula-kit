import { RefObject } from 'react'

import { Breakpoint, BREAKPOINTS } from 'lib/definitions'

import { Bucket, PropValues, isBlank } from '../definitions'
import { getBucketPerBp } from './get-bucket-per-bp'

export const updateDomRespStyle = (
  componentName: 'Box' | 'Flex' | 'Flex.Item' | 'Grid' | 'Grid.Item' | 'Image',
  elemRef: RefObject<any>,
  breakpoint: Breakpoint,
  propValues: PropValues
): void => {
  const el = elemRef.current
  if (!el) return

  // -------------------------------------
  // 0. Capture initial inline styles (user ownership)
  // -------------------------------------
  const initialKey = 'neb_initial_style_' + componentName.toLowerCase()

  if (!el[initialKey]) {
    const initial: Record<string, boolean> = {}

    const style = el.style

    for (const prop in style) {
      if (style[prop]) {
        initial[prop] = true
      }
    }

    el[initialKey] = initial
  }

  const initial = el[initialKey] as Record<string, boolean>

  // -------------------------------------
  // 1. Collect controlled props
  // -------------------------------------
  const activePropValues: PropValues = {}
  for (const propName in propValues) {
    if (propValues[propName] !== undefined) {
      activePropValues[propName] = propValues[propName]
    }
  }

  // -------------------------------------
  // 2. Resolve merged bucket
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
  const prevApplied: Set<string> = el[storeKey] || new Set()
  const nextApplied = new Set<string>()

  for (const propName of prevApplied) {
    if (!(propName in mergedBucket)) {
      el.style[propName] = ''
    }
  }

  // -------------------------------------
  // 4. Apply resolved styles
  // -------------------------------------
  for (const propName in mergedBucket) {
    const value = mergedBucket[propName]
    if (isBlank(value)) continue

    // 🔥 User owns it → never override
    if (initial[propName]) continue

    el.style[propName] = value
    nextApplied.add(propName)
  }

  // -------------------------------------
  // 5. Persist applied keys
  // -------------------------------------
  el[storeKey] = nextApplied
}
