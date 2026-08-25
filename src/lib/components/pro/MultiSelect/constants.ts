import { BoxVariant } from 'lib/components/core/Box'
import { MultiSelectProps } from 'lib/index.pro'

export const MULTI_SELECT_VARIANTS = ['solid', 'outline'] as const satisfies readonly BoxVariant[]

export const DEFAULT_MULTI_SELECT_INLINE_SIZE: MultiSelectProps['inlineSize'] = '100%'
export const DEFAULT_MULTI_SELECT_VARIANT: MultiSelectProps['variant'] = 'solid'
export const DEFAULT_MULTI_SELECT_INTENT: MultiSelectProps['intent'] = 'tertiary'
export const DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT: MultiSelectProps['visibleItemsCount'] = 5
