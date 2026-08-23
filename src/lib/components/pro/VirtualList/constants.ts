import { VirtualListProps } from 'lib/index.pro'

export const VIRTUAL_LIST_SCROLL_ALIGN = ['start', 'center', 'end'] as const
export const DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX: VirtualListProps['scrollToIndex'] = 0
export const DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN: VirtualListProps['scrollAlign'] = 'start'
