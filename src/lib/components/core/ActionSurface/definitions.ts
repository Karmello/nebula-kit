import { ComponentProps } from 'react'

import { ACTION_SURFACE_TAGS } from 'lib/constants'
import { ActionSurfaceTag } from 'lib/types'

import { BoxProps } from '../Box'

export const DEFAULT_ACTION_SURFACE_INTERACTIVE: ActionSurfaceProps['interactive'] = true
export const DEFAULT_ACTION_SURFACE_RIPPLE: ActionSurfaceProps['ripple'] = true

type PropsFromBox<T extends ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[0]> = Pick<
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

type OwnProps<T extends ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[0]> = {
  ripple?: boolean
  selected?: boolean
  onClick?: ComponentProps<T>['onClick']
}

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromBox<T> & OwnProps<T>
