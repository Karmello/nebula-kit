import { ComponentProps } from 'react'

import { BoxProps } from 'lib/components'

import { DEFAULT_ACTION_SURFACE_TAG } from './action-surface'

export const ACTION_SURFACE_TAGS = ['button', 'a', 'div'] as const

export type ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[number]

type PropsFromBox<T extends ActionSurfaceTag = typeof DEFAULT_ACTION_SURFACE_TAG> = Pick<
  BoxProps<T>,
  'children' | 'tag' | 'tagAttrs' | 'tagRef' | 'disabled' | 'interactive' | 'elevated' | 'variant' | 'color' | 'intent'
>

type OwnProps<T extends ActionSurfaceTag = typeof DEFAULT_ACTION_SURFACE_TAG> = {
  ripple?: boolean
  selected?: boolean
  onClick?: ComponentProps<T>['onClick']
}

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromBox<T> & OwnProps<T>
