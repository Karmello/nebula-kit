import type { TableProps } from 'lib/index.core'

export const TABLE_LAYOUTS = ['auto', 'fixed'] as const
export const DEFAULT_TABLE_LAYOUT: TableProps['layout'] = 'auto'

export const DEFAULT_TABLE_INTENT: TableProps['intent'] = 'tertiary'
export const DEFAULT_TABLE_PADDING_BLOCK: TableProps['paddingBlock'] = '10px'
export const DEFAULT_TABLE_PADDING_INLINE: TableProps['paddingInline'] = '15px'
