import { ComponentProps } from 'react'

import { BoxProps } from 'lib/components'

export const DEFAULT_ACTION_SURFACE_INTERACTIVE: ActionSurfaceProps['interactive'] = true
export const DEFAULT_ACTION_SURFACE_RIPPLE: ActionSurfaceProps['ripple'] = true
export const DEFAULT_ACTION_SURFACE_TAG: ActionSurfaceTag = 'button'

export const ACTION_SURFACE_TAGS = ['button', 'a', 'div'] as const

export type ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[number]

type PropsFromBox<T extends ActionSurfaceTag = typeof DEFAULT_ACTION_SURFACE_TAG> = Pick<
  BoxProps<T>,
  | 'tag'
  | 'tagAttrs'
  | 'tagRef'
  | 'disabled'
  | 'interactive'
  | 'elevated'
  | 'variant'
  | 'color'
  | 'intent'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'padding'
  | 'paddingBlock'
  | 'paddingInline'
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
> & {
  children: BoxProps<T>['children']
}

type OwnProps<T extends ActionSurfaceTag = typeof DEFAULT_ACTION_SURFACE_TAG> = {
  ripple?: boolean
  selected?: boolean
  onClick?: ComponentProps<T>['onClick']
}

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromBox<T> & OwnProps<T>
