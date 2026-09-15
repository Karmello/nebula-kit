import type { BoxBgMode, BoxBorderMode, BoxIntent, BoxText } from 'lib/components/core/Box'
import type { TShirtSize } from 'lib/types'

export const BUTTON_ALIGNS = ['center', 'start', 'split'] as const
export const BUTTON_ICON_PLACEMENTS = ['left', 'right'] as const
export const BUTTON_TAGS = ['button', 'a'] as const
export const BUTTON_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const

export const DEFAULT_BUTTON_SCALE: TShirtSize = 'md'
export const DEFAULT_BUTTON_VARIANT: (typeof BUTTON_VARIANTS)[number] = 'solid'
export const DEFAULT_BUTTON_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_BUTTON_RIPPLE = true
export const DEFAULT_BUTTON_ALIGN: (typeof BUTTON_ALIGNS)[number] = 'center'
export const DEFAULT_BUTTON_ICON_PLACEMENT: (typeof BUTTON_ICON_PLACEMENTS)[number] = 'left'

export const BUTTON_VARIANT_MAP: Record<
  (typeof BUTTON_VARIANTS)[number],
  { bgMode: BoxBgMode; borderMode: BoxBorderMode; text: BoxText }
> = {
  solid: { bgMode: 'filled', borderMode: 'none', text: 'default' },
  outline: { bgMode: 'tinted', borderMode: 'tinted', text: 'default' },
  'soft-outline': { bgMode: 'tinted', borderMode: 'tinted', text: 'colored' },
  ghost: { bgMode: 'transparent', borderMode: 'none', text: 'colored' },
}
