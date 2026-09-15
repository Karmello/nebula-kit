import { type HtmlTagProps } from 'lib/components/core/HtmlTag/types'

import { USE_SCALE_AXIS, USE_SCALE_ORIGIN } from './constants'

export type UseScaleOrigin = (typeof USE_SCALE_ORIGIN)[number]
export type UseScaleAxis = (typeof USE_SCALE_AXIS)[number]

export type UseScaleArgs = {
  ref: HtmlTagProps<any>['tagRef']
  visible: boolean
  axis?: UseScaleAxis
  from?: number
  to?: number
  origin?: UseScaleOrigin
  duration?: number
  easing?: string
}
