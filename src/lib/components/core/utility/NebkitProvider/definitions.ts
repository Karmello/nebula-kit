import { ReactElement } from 'react'

import { Color, Sizes, Theme } from 'lib/definitions'

export const DEFAULT_NEBKIT_THEME: Theme = 'light'
export const DEFAULT_NEBKIT_BRAND: Color = 'gray'
export const DEFAULT_NEBKIT_BORDER_RADIUS_SIZE: NebkitProviderProps['borderRadiusSize'] = 'md'

export const NEBKIT_SIZES_MAP: {
  borderRadiusSize: Record<NebkitBorderRadiusSize, string>
} = {
  borderRadiusSize: { xs: '1px', sm: '3px', md: '5px', lg: '8px', xl: '12px' },
}

export const NEBKIT_BORDER_RADIUS_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const satisfies Sizes[]

export type NebkitBorderRadiusSize = (typeof NEBKIT_BORDER_RADIUS_SIZES)[number]

export type NebkitProviderProps = {
  children: ReactElement
  theme?: Theme
  brand?: Color
  borderRadiusSize?: NebkitBorderRadiusSize
}
