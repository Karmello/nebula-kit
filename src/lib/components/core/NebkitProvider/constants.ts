import type { TShirtSize } from 'lib/types'

import type { NebkitProviderBorderRadiusSize, NebkitProviderProps } from './types'

export const NEBKIT_PROVIDER_BORDER_RADIUS_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const satisfies TShirtSize[]
export const NEBKIT_PROVIDER_RIPPLE_MODES = ['off', 'default', 'emphasized'] as const
export const NEBKIT_PROVIDER_THEMES = ['light', 'dark'] as const
export const NEBKIT_PROVIDER_SATURATIONS = ['soft', 'vivid'] as const

export const NEBKIT_PROVIDER_SIZES_MAP: {
  borderRadiusSize: Record<NebkitProviderBorderRadiusSize, string>
} = {
  borderRadiusSize: { xs: '1px', sm: '3px', md: '5px', lg: '8px', xl: '12px' },
}

export const DEFAULT_NEBKIT_PROVIDER_THEME: NebkitProviderProps['theme'] = 'light'
export const DEFAULT_NEBKIT_PROVIDER_BRAND: NebkitProviderProps['brand'] = 'gray'
export const DEFAULT_NEBKIT_PROVIDER_SATURATION: NebkitProviderProps['saturation'] = 'soft'
export const DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE: NebkitProviderProps['borderRadiusSize'] = 'md'
export const DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE: NebkitProviderProps['rippleMode'] = 'default'
