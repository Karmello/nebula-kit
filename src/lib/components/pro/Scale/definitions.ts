import { BoxProps } from 'lib/index.core'

export const SCALE_ORIGIN = [
  'center',
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
] as const

export const SCALE_ORIGIN_MAP: Record<ScaleOrigin, string> = {
  center: 'center center',
  top: 'top center',
  bottom: 'bottom center',
  left: 'center left',
  right: 'center right',
  'top-left': 'top left',
  'top-right': 'top right',
  'bottom-left': 'bottom left',
  'bottom-right': 'bottom right',
}

export const SCALE_AXIS = ['both', 'x', 'y'] as const

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
