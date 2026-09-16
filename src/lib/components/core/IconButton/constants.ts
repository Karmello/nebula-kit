import type { BoxBgMode, BoxBorderMode, BoxIntent, BoxTextMode } from 'lib/components/core/Box'
import type { TShirtSize } from 'lib/types'

export const ICON_BUTTON_TAGS = ['button', 'a'] as const
export const ICON_BUTTON_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const

export const DEFAULT_ICON_BUTTON_VARIANT: (typeof ICON_BUTTON_VARIANTS)[number] = 'solid'
export const DEFAULT_ICON_BUTTON_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_ICON_BUTTON_RIPPLE = true
export const DEFAULT_ICON_BUTTON_SCALE: TShirtSize = 'sm'

export const ICON_BUTTON_VARIANT_MAP: Record<
  (typeof ICON_BUTTON_VARIANTS)[number],
  { bgMode: BoxBgMode; borderMode: BoxBorderMode; textMode: BoxTextMode }
> = {
  solid: { bgMode: 'filled', borderMode: 'none', textMode: 'default' },
  outline: { bgMode: 'tinted', borderMode: 'tinted', textMode: 'default' },
  'soft-outline': { bgMode: 'tinted', borderMode: 'tinted', textMode: 'colored' },
  ghost: { bgMode: 'transparent', borderMode: 'none', textMode: 'colored' },
}
