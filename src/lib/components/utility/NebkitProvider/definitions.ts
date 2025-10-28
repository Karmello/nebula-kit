import { ReactElement } from 'react'

import { Brand, ScaleValue, Sizes, Theme } from 'lib/definitions'

export const DEFAULT_NEBKIT_THEME: Theme = 'light'
export const DEFAULT_NEBKIT_BRAND: Brand = 'purple'
export const DEFAULT_NEBKIT_BORDER_WIDTH_SIZE: NebkitProviderProps['borderWidthSize'] = 'md'
export const DEFAULT_NEBKIT_BORDER_RADIUS_SIZE: NebkitProviderProps['borderRadiusSize'] = 'md'

export const NEBKIT_SIZES_MAP: {
  borderWidthSize: Record<NebkitBorderWidthSize, ScaleValue>
  borderRadiusSize: Record<NebkitBorderRadiusSize, ScaleValue>
} = {
  borderWidthSize: { sm: 1, md: 2, lg: 3 },
  borderRadiusSize: { xs: 1, sm: 3, md: 5, lg: 8, xl: 12 },
}

export const DEFAULT_NEBKIT_BACKGROUND: Record<Theme, NebkitThemeBgColor> = {
  light: 'white',
  dark: 'black',
}

export const NEBKIT_THEME_BACKGROUNDS_MAP: Record<NebkitThemeBgColor, object> = {
  white: {
    '--neb-background': 'var(--neb-gray-1)',
    '--neb-text': 'var(--neb-gray-15)',
    '--neb-focus-border': 'var(--neb-gray-15)',
  },
  black: {
    '--neb-background': 'var(--neb-gray-15)',
    '--neb-text': 'var(--neb-gray-1)',
    '--neb-focus-border': 'var(--neb-gray-1)',
  },
}

export const NEBKIT_BORDER_WIDTH_SIZES = ['sm', 'md', 'lg'] as const satisfies Sizes[]
export const NEBKIT_BORDER_RADIUS_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const satisfies Sizes[]

export type NebkitThemeBgLight = 'white'
export type NebkitThemeBgDark = 'black'
export type NebkitThemeBgColor = NebkitThemeBgLight | NebkitThemeBgDark
export type NebkitBorderWidthSize = (typeof NEBKIT_BORDER_WIDTH_SIZES)[number]
export type NebkitBorderRadiusSize = (typeof NEBKIT_BORDER_RADIUS_SIZES)[number]

export type NebkitProviderProps<T extends Theme = 'light'> = {
  children: ReactElement
  theme?: T
  brand?: Brand
  background?: T extends 'light' ? NebkitThemeBgLight : NebkitThemeBgDark
  borderWidthSize?: NebkitBorderWidthSize
  borderRadiusSize?: NebkitBorderRadiusSize
}
