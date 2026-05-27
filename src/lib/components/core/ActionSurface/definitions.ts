import { ComponentProps } from 'react'

import { BoxProps } from 'lib/components'

export const ACTION_SURFACE_TAGS = ['button', 'a', 'div'] as const

export type ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[number]

type PropsFromBox<T extends ActionSurfaceTag = 'button'> = Pick<
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
> & {
  children: BoxProps<T>['children']
}

type OwnProps<T extends ActionSurfaceTag = 'button'> = {
  ripple?: boolean
  selected?: boolean
  onClick?: ComponentProps<T>['onClick']
}

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromBox<T> & OwnProps<T>
