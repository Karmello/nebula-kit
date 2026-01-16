import { ReactElement } from 'react'

import { Sizes, Theme } from 'lib/definitions'
import { BoxColor } from 'lib/components/core/base/Box'

export const DEFAULT_NEBKIT_THEME: Theme = 'light'
export const DEFAULT_NEBKIT_BRAND: BoxColor = 'gray'
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
  brand?: BoxColor
  borderRadiusSize?: NebkitBorderRadiusSize
  lockGlobalScroll?: boolean
}
