import isNil from 'lodash-es/isNil.js'
import isObject from 'lodash-es/isObject.js'

import { Breakpoint } from 'lib/definitions'

import { Bucket, isBlank, PropValues } from '../definitions'
import { ComponentName } from './update-dom-resp-dataset'
import { getDataAttrName } from './get-data-attr-name'

export const getBucketPerBp = (componentName: ComponentName, breakpoint: Breakpoint, propValues: PropValues): Bucket => {
  const bucket: Bucket = {}

  for (const propName in propValues) {
    const propValue = propValues[propName]

    if (isNil(propValue)) {
      continue
    }

    if (breakpoint === 'base' || isObject(propValue)) {
      const finalValue = isObject(propValue) ? propValue[breakpoint] : propValue
      if (!isNil(finalValue) && !isBlank(finalValue)) {
        bucket[getDataAttrName(componentName, propName)] = String(finalValue)
      }
    }
  }

  return bucket
}
