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

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
}

type OwnProps = {
  visible: boolean
  axis?: ScaleAxis
  from?: number
  to?: number
  origin?: ScaleOrigin
  duration?: number
  easing?: string
}

export type ScaleProps = PropsFromBox & OwnProps
