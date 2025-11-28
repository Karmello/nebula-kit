import { ReactElement } from 'react'

import { Color, ScaleValue, Sizes, Theme } from 'lib/definitions'

export const DEFAULT_NEBKIT_THEME: Theme = 'light'
export const DEFAULT_NEBKIT_BRAND: Color = 'gray'
export const DEFAULT_NEBKIT_BORDER_RADIUS_SIZE: NebkitProviderProps['borderRadiusSize'] = 'md'

export const NEBKIT_SIZES_MAP: {
  borderRadiusSize: Record<NebkitBorderRadiusSize, ScaleValue>
} = {
  borderRadiusSize: { xs: 1, sm: 3, md: 5, lg: 8, xl: 12 },
}

export const NEBKIT_BORDER_RADIUS_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const satisfies Sizes[]

export type NebkitBorderRadiusSize = (typeof NEBKIT_BORDER_RADIUS_SIZES)[number]

export type NebkitProviderProps<T extends Theme = 'light'> = {
  children: ReactElement
  theme?: T
  brand?: Color
  borderRadiusSize?: NebkitBorderRadiusSize
}
