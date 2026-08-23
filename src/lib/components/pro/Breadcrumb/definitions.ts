import type { BreadcrumbTag, TShirtSize } from 'lib/types'

import { type BoxProps } from '../../core/Box/types'
import { type DropdownListProps } from '../../shared/DropdownList/definitions'

export const DEFAULT_BREADCRUMB_INTENT: BreadcrumbProps['intent'] = 'muted'
export const DEFAULT_BREADCRUMB_SIZE: BreadcrumbProps['size'] = 'xs'

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
  // DropdownList
  color?: DropdownListProps['color']
  intent?: DropdownListProps['intent']
}
