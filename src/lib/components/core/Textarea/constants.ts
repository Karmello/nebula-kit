import type { TextareaProps } from 'lib/index.core'

export const DEFAULT_TEXTAREA_VARIANT: TextareaProps['variant'] = 'solid'
export const DEFAULT_TEXTAREA_INTENT: TextareaProps['intent'] = 'tertiary'
export const DEFAULT_TEXTAREA_ROWS: TextareaProps['rows'] = 5
export const DEFAULT_TEXTAREA_RESIZE: TextareaProps['resize'] = 'vertical'
export const DEFAULT_TEXTAREA_INLINE_SIZE: TextareaProps['inlineSize'] = '100%'
export const DEFAULT_TEXTAREA_MAX_INLINE_SIZE: TextareaProps['maxInlineSize'] = '100%'

export const TEXTAREA_RESIZE = ['none', 'vertical', 'horizontal', 'both'] as const
