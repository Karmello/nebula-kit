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

type BreadcrumbOwnProps = {
  tree: BreadcrumbNode[]
  defaultPath?: string[]
  path?: string[]
  size?: TShirtSize
  onChange?: (path: string[]) => void
}

type PropsFromBox<T extends BreadcrumbTag = 'div'> = {
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
}

type PropsFromDropdownList = {
  color?: DropdownListProps['color']
  intent?: DropdownListProps['intent']
}

export type BreadcrumbProps<T extends BreadcrumbTag = 'div'> = PropsFromBox<T> &
  PropsFromDropdownList &
  BreadcrumbOwnProps
