import { RefObject } from 'react'

import { BREAKPOINTS } from 'lib/constants'
import { Breakpoint } from 'lib/types'

import { Bucket, isBlank,PropValues } from '../definitions'
import { getBucketPerBp } from './get-bucket-per-bp'

export const syncRespStyle = (
  namespace: string,
  elemRef: RefObject<any>,
  breakpoint: Breakpoint,
  propValues: PropValues
): void => {
  const el = elemRef.current
  if (!el) return

  // -------------------------------------
  // 0. Capture initial inline styles (user ownership)
  // -------------------------------------
  const initialKey = 'neb_initial_style_' + namespace.toLowerCase()

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
  const mergedBucket: Bucket = {}

  for (const bp of BREAKPOINTS) {
    const bucket = getBucketPerBp(bp, activePropValues)
    for (const key in bucket) {
      mergedBucket[key] = bucket[key]
    }
    if (bp === breakpoint) break
  }

  // -------------------------------------
  // 3. Cleanup previously applied styles
  // -------------------------------------
  const storeKey = 'neb_resp_style_' + namespace.toLowerCase()
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

    if (el.style[propName] !== value) {
      el.style[propName] = value
    }

    nextApplied.add(propName)
  }

  // -------------------------------------
  // 5. Persist applied keys
  // -------------------------------------
  el[storeKey] = nextApplied
}
