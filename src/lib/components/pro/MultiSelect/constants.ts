import { BoxIntent, BoxVariant } from 'lib/components/core/Box'

export const MULTI_SELECT_VARIANTS = ['solid', 'outline'] as const satisfies readonly BoxVariant[]

export const DEFAULT_MULTI_SELECT_INLINE_SIZE = '100%'
export const DEFAULT_MULTI_SELECT_VARIANT: (typeof MULTI_SELECT_VARIANTS)[number] = 'solid'
export const DEFAULT_MULTI_SELECT_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT = 5
