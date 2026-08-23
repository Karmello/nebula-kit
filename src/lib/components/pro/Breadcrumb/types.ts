import type { BreadcrumbTag, TShirtSize } from 'lib/types'

import { type BoxProps } from '../../core/Box/types'
import { type DropdownListProps } from '../../shared/DropdownList/types'

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
