import { BoxVariant } from '../Box'
import { SelectProps } from './types'

export const SELECT_VARIANTS = ['solid', 'outline'] as const satisfies readonly BoxVariant[]
export const SELECT_SCROLL_ALIGN = ['start', 'center'] as const

export const DEFAULT_SELECT_INLINE_SIZE: SelectProps['inlineSize'] = '100%'
export const DEFAULT_SELECT_VARIANT: SelectProps['variant'] = 'outline'
export const DEFAULT_SELECT_INTENT: SelectProps['intent'] = 'tertiary'
export const DEFAULT_SELECT_VISIBLE_ITEMS_COUNT: SelectProps['visibleItemsCount'] = 5
export const DEFAULT_SELECT_SCROLL_ALIGN: SelectProps['scrollAlign'] = 'start'
