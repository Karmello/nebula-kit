import { Breakpoint } from 'lib/types'

import { Bucket, isBlank,PropValues } from '../definitions'

export const getBucketPerBp = (bp: Breakpoint, propValues: PropValues): Bucket => {
  const bucket: Bucket = {}

  for (const propName in propValues) {
    const propValue = propValues[propName]
    if (propValue == null) continue

    if (bp === 'base' || typeof propValue === 'object') {
      const finalValue = typeof propValue === 'object' ? propValue[bp] : propValue

      if (finalValue != null && !isBlank(finalValue)) {
        bucket[propName] = finalValue
      }
    }
  }

  return bucket
}
