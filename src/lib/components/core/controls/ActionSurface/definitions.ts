import { ComponentProps } from 'react'

import { type BoxProps } from 'lib/components'
import { type RespValue } from 'lib/definitions'

export const ACTION_SURFACE_TAGS = ['button', 'a', 'div'] as const

export const DEFAULT_ACTION_SURFACE_VARIANT: ActionSurfaceProps['variant'] = 'solid'
export const DEFAULT_ACTION_SURFACE_INTENT: ActionSurfaceProps['intent'] = 'tertiary'
export const DEFAULT_ACTION_SURFACE_INTERACTIVE: ActionSurfaceProps['interactive'] = true
export const DEFAULT_ACTION_SURFACE_RIPPLE: ActionSurfaceProps['ripple'] = true

export type ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[number]

export type ActionSurfaceClickHandler<T extends ActionSurfaceTag> = ComponentProps<T>['onClick']

type ActionSurfaceOwnProps<T extends ActionSurfaceTag = 'button'> = {
  fullWidth?: RespValue<boolean>
  selected?: boolean
  ripple?: boolean
  onClick?: ActionSurfaceClickHandler<T>
}

type PropsFromBox<T extends ActionSurfaceTag = 'button'> = Pick<
  BoxProps<T>,
  | 'tag'
  | 'tagAttrs'
  | 'tagRef'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'color'
  | 'disabled'
  | 'elevated'
  | 'hidden'
  | 'inlineSize'
  | 'interactive'
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'intent'
  | 'variant'
> & {
  children: BoxProps['children']
}

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromBox<T> & ActionSurfaceOwnProps<T>
