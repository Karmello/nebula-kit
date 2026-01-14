import { ReactNode } from 'react'

import { BoxProps } from 'lib/components'

export const VIRTUAL_LIST_SCROLL_ALIGN = ['start', 'center', 'end'] as const
export const DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX: VirtualListProps['scrollToIndex'] = 0
export const DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN: VirtualListProps['scrollAlign'] = 'start'

export type VirtualListScrollAlign = (typeof VIRTUAL_LIST_SCROLL_ALIGN)[number]

type VirtualListOwnProps<T = any> = {
  items: T[]
  itemHeight: number
  visibleItemsCount: number
  renderItem: (item: T, index: number) => ReactNode
  scrollToIndex?: number
  scrollAlign?: VirtualListScrollAlign
  overscan?: number
}

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef' | 'intent' | 'color'>

export type VirtualListProps<T = any> = VirtualListOwnProps<T> & PropsFromBox
