import { BOX_COLORS } from 'lib/constants'
import type { TShirtSize } from 'lib/types'

export const NEBKIT_PROVIDER_BORDER_RADIUS_SIZES = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
] as const satisfies TShirtSize[]
export const NEBKIT_PROVIDER_RIPPLE_MODES = ['off', 'default', 'emphasized'] as const
export const NEBKIT_PROVIDER_THEMES = ['light', 'dark'] as const
export const NEBKIT_PROVIDER_SATURATIONS = ['soft', 'vivid'] as const

export const NEBKIT_PROVIDER_SIZES_MAP: {
  borderRadiusSize: Record<(typeof NEBKIT_PROVIDER_BORDER_RADIUS_SIZES)[number], string>
} = {
  borderRadiusSize: { xs: '1px', sm: '3px', md: '5px', lg: '8px', xl: '12px' },
}

export const DEFAULT_NEBKIT_PROVIDER_THEME: (typeof NEBKIT_PROVIDER_THEMES)[number] = 'light'
export const DEFAULT_NEBKIT_PROVIDER_BRAND: (typeof BOX_COLORS)[number] = 'gray'
export const DEFAULT_NEBKIT_PROVIDER_SATURATION: (typeof NEBKIT_PROVIDER_SATURATIONS)[number] =
  'soft'
export const DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE: (typeof NEBKIT_PROVIDER_BORDER_RADIUS_SIZES)[number] =
  'md'
export const DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE: (typeof NEBKIT_PROVIDER_RIPPLE_MODES)[number] =
  'default'
