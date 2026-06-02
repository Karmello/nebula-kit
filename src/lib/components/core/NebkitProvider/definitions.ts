import { ReactElement } from 'react'

import { Saturation, Theme,TShirtSize } from 'lib/types'

import { BoxColor } from '../Box/types'

export const DEFAULT_NEBKIT_THEME: NebkitProviderProps['theme'] = 'light'
export const DEFAULT_NEBKIT_BRAND: NebkitProviderProps['brand'] = 'gray'
export const DEFAULT_NEBKIT_SATURATION: NebkitProviderProps['saturation'] = 'soft'
export const DEFAULT_NEBKIT_BORDER_RADIUS_SIZE: NebkitProviderProps['borderRadiusSize'] = 'md'
export const DEFAULT_NEBKIT_RIPPLE_MODE: NebkitProviderProps['rippleMode'] = 'default'

export const NEBKIT_SIZES_MAP: {
  borderRadiusSize: Record<NebkitBorderRadiusSize, string>
} = {
  borderRadiusSize: { xs: '1px', sm: '3px', md: '5px', lg: '8px', xl: '12px' },
}

export const NEBKIT_BORDER_RADIUS_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const satisfies TShirtSize[]
export const NEBKIT_RIPPLE_MODES = ['off', 'default', 'emphasized'] as const

export type NebkitBorderRadiusSize = (typeof NEBKIT_BORDER_RADIUS_SIZES)[number]
export type NebkitRippleMode = (typeof NEBKIT_RIPPLE_MODES)[number]

export type NebkitProviderProps = {
  children: ReactElement
  theme?: Theme
  brand?: BoxColor
  saturation?: Saturation
  borderRadiusSize?: NebkitBorderRadiusSize
  rippleMode?: NebkitRippleMode
  lockGlobalScroll?: boolean
}
