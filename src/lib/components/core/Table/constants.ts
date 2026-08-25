import type { BoxIntent } from '../Box'

export const TABLE_LAYOUTS = ['auto', 'fixed'] as const
export const DEFAULT_TABLE_LAYOUT: (typeof TABLE_LAYOUTS)[number] = 'auto'

export const DEFAULT_TABLE_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_TABLE_PADDING_BLOCK = '10px'
export const DEFAULT_TABLE_PADDING_INLINE = '15px'
