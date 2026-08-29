import { ReactNode } from 'react'

import { BoxProps } from 'lib/components/core/Box'

import { VIRTUAL_LIST_SCROLL_ALIGN } from './constants'

export type VirtualListScrollAlign = (typeof VIRTUAL_LIST_SCROLL_ALIGN)[number]

export type VirtualListProps<T = any> = {
  // own
  items: T[]
  itemBlockSize: number
  visibleItemsCount: number
  renderItem: (item: T, index: number) => ReactNode
  scrollToIndex?: number
  scrollAlign?: VirtualListScrollAlign
  overscan?: number
  ensureVisibleIndex?: number
  // Box
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  intent?: BoxProps['intent']
  color?: BoxProps['color']
  surface?: BoxProps['surface']
}
