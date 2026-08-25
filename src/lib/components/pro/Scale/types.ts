import { BoxProps } from 'lib/components/core/Box'

import { SCALE_AXIS, SCALE_ORIGIN } from './constants'

export type ScaleOrigin = (typeof SCALE_ORIGIN)[number]
export type ScaleAxis = (typeof SCALE_AXIS)[number]

export type ScaleProps = {
  // own
  visible: boolean
  axis?: ScaleAxis
  from?: number
  to?: number
  origin?: ScaleOrigin
  duration?: number
  easing?: string
  // Box
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps['children']
}
