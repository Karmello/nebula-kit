import type { TShirtSize } from 'lib/types'

import { type BoxColor, type BoxIntent, type BoxProps } from '../../core/Box/types'
import { BREADCRUMB_TAGS, BREADCRUMB_VARIANTS } from './constants'

export type BreadcrumbTag = (typeof BREADCRUMB_TAGS)[number]
export type BreadcrumbVariant = (typeof BREADCRUMB_VARIANTS)[number]

export type BreadcrumbNode = {
  value: string
  label: string
  children?: BreadcrumbNode[]
}

export type BreadcrumbProps<T extends BreadcrumbTag = 'div'> = {
  // own
  tree: BreadcrumbNode[]
  defaultPath?: string[]
  path?: string[]
  scale?: TShirtSize
  variant?: BreadcrumbVariant
  onChange?: (path: string[]) => void
  // Box
  elemTag?: BoxProps<T>['elemTag']
  elemAttrs?: BoxProps<T>['elemAttrs']
  elemRef?: BoxProps<T>['elemRef']
  color?: BoxColor
  intent?: BoxIntent
}
