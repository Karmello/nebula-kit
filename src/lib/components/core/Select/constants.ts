import { BoxVariant } from '../Box/types'
import { SelectProps } from './types'

export const SELECT_VARIANTS = ['solid', 'outline'] as const satisfies readonly BoxVariant[]

export const DEFAULT_SELECT_INLINE_SIZE: SelectProps['inlineSize'] = '100%'
export const DEFAULT_SELECT_VARIANT: SelectProps['variant'] = 'solid'
export const DEFAULT_SELECT_INTENT: SelectProps['intent'] = 'tertiary'
export const DEFAULT_SELECT_VISIBLE_ITEMS_COUNT: SelectProps['visibleItemsCount'] = 5
