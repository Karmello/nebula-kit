import type { TShirtSize } from 'lib/types'

import { type BoxColor, type BoxIntent, type BoxProps } from '../../core/Box/types'
import { BREADCRUMB_TAGS } from './constants'

export type BreadcrumbTag = (typeof BREADCRUMB_TAGS)[number]

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
  size?: TShirtSize
  onChange?: (path: string[]) => void
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  color?: BoxColor
  intent?: BoxIntent
}
