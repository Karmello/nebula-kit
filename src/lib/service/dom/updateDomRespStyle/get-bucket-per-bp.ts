import isNil from 'lodash-es/isNil.js'
import isObject from 'lodash-es/isObject.js'

import { Breakpoint } from 'lib/definitions'

import { Bucket, PropValues, isBlank } from '../definitions'
import { formatCssValue } from './format-css-value'

export const getBucketPerBp = (bp: Breakpoint, propValues: PropValues): Bucket => {
  const bucket: Bucket = {}

  for (const propName in propValues) {
    const propValue = propValues[propName]

    if (isNil(propValue)) {
      continue
    }

    if (bp === 'base' || isObject(propValue)) {
      const finalValue = isObject(propValue) ? propValue[bp] : propValue
      if (!isNil(finalValue) && !isBlank(finalValue)) {
        bucket[propName] = formatCssValue(propName, finalValue)
      }
    }
  }

  return bucket
}
