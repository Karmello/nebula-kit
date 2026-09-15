import type { BoxBgMode, BoxBorderMode, BoxIntent, BoxText } from '../Box'

export const TEXTAREA_RESIZE = ['none', 'vertical', 'horizontal', 'both'] as const
export const TEXTAREA_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const

export const DEFAULT_TEXTAREA_VARIANT: (typeof TEXTAREA_VARIANTS)[number] = 'solid'
export const DEFAULT_TEXTAREA_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_TEXTAREA_ROWS = 5
export const DEFAULT_TEXTAREA_RESIZE: (typeof TEXTAREA_RESIZE)[number] = 'vertical'
export const DEFAULT_TEXTAREA_INLINE_SIZE = '100%'
export const DEFAULT_TEXTAREA_MAX_INLINE_SIZE = '100%'

export const TEXTAREA_VARIANT_MAP: Record<
  (typeof TEXTAREA_VARIANTS)[number],
  { bgMode: BoxBgMode; borderMode: BoxBorderMode; text: BoxText }
> = {
  solid: { bgMode: 'filled', borderMode: 'none', text: 'default' },
  outline: { bgMode: 'tinted', borderMode: 'tinted', text: 'default' },
  'soft-outline': { bgMode: 'tinted', borderMode: 'tinted', text: 'colored' },
  ghost: { bgMode: 'transparent', borderMode: 'none', text: 'colored' },
}
