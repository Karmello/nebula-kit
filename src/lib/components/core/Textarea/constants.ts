import type { BoxIntent, BoxVariant } from '../Box'

export const TEXTAREA_RESIZE = ['none', 'vertical', 'horizontal', 'both'] as const

export const DEFAULT_TEXTAREA_VARIANT: BoxVariant = 'solid'
export const DEFAULT_TEXTAREA_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_TEXTAREA_ROWS = 5
export const DEFAULT_TEXTAREA_RESIZE: (typeof TEXTAREA_RESIZE)[number] = 'vertical'
export const DEFAULT_TEXTAREA_INLINE_SIZE = '100%'
export const DEFAULT_TEXTAREA_MAX_INLINE_SIZE = '100%'
