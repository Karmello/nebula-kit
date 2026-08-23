import { ReactNode } from 'react'

import { BoxProps } from 'lib/index.core'

export const VIRTUAL_LIST_SCROLL_ALIGN = ['start', 'center', 'end'] as const
export const DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX: VirtualListProps['scrollToIndex'] = 0
export const DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN: VirtualListProps['scrollAlign'] = 'start'

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
  elevated?: BoxProps['elevated']
}
