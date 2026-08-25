import { BoxIntent, BoxVariant } from '../Box'

export const SELECT_VARIANTS = ['solid', 'outline'] as const satisfies readonly BoxVariant[]

export const DEFAULT_SELECT_INLINE_SIZE = '100%'
export const DEFAULT_SELECT_VARIANT: (typeof SELECT_VARIANTS)[number] = 'solid'
export const DEFAULT_SELECT_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_SELECT_VISIBLE_ITEMS_COUNT = 5
