import { type HtmlElemProps } from 'lib/components/core/HtmlElem/types'

import { USE_SCALE_AXIS, USE_SCALE_ORIGIN } from './constants'

export type UseScaleOrigin = (typeof USE_SCALE_ORIGIN)[number]
export type UseScaleAxis = (typeof USE_SCALE_AXIS)[number]

export type UseScaleArgs = {
  ref: HtmlElemProps<any>['elemRef']
  visible: boolean
  axis?: UseScaleAxis
  from?: number
  to?: number
  origin?: UseScaleOrigin
  duration?: number
  easing?: string
}
