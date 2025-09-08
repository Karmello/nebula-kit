import { CSSProperties } from 'react'
import isNil from 'lodash/isNil'
import isObject from 'lodash/isObject'

import { Breakpoint } from 'lib/definitions'

import { Bucket, ResponsiveProps } from '../compute-responsive-css'
import { formatCssValue } from '../formatCssValue'

const isBlank = (v: unknown): v is '' => typeof v === 'string' && v === ''

export const getCssValuesPerBp = (breakpoint: Breakpoint, props: ResponsiveProps<string | number>) => {
  const bucket: Bucket = {}

  for (const key in props) {
    const propName = key as keyof CSSProperties
    const propValue = props[propName]

    if (isNil(propValue)) {
      continue
    }

    if (breakpoint === 'base' || isObject(propValue)) {
      const value = isObject(propValue) ? propValue[breakpoint] : propValue
      if (!isNil(value) && !isBlank(value)) {
        bucket[propName] = formatCssValue(propName, value)
      }
    }
  }

  return bucket
}
