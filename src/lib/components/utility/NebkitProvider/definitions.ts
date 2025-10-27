import { ReactElement } from 'react'

import { Brand, ScaleValue, Sizes, Theme } from 'lib/definitions'

export const DEFAULT_NEBKIT_PROVIDER_THEME: Theme = 'light'
export const DEFAULT_NEBKIT_PROVIDER_BRAND: Brand = 'purple'
export const DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH_SIZE: NebkitProviderProps['borderWidthSize'] = 'md'
export const DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE: NebkitProviderProps['borderRadiusSize'] = 'md'

export const NEBKIT_PROVIDER_SIZES_MAP: {
  borderWidthSize: Record<BorderWidthSize, ScaleValue>
  borderRadiusSize: Record<BorderRadiusSize, ScaleValue>
} = {
  borderWidthSize: { sm: 1, md: 2, lg: 3 },
  borderRadiusSize: { xs: 1, sm: 3, md: 5, lg: 8, xl: 12 },
}

export const DEFAULT_NEBKIT_PROVIDER_BACKGROUND: Record<Theme, ThemeBackgroundColor> = {
  light: 'white',
  dark: 'black',
}

export const THEME_BACKGROUNDS_MAP: Record<ThemeBackgroundColor, object> = {
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

export const BORDER_WIDTH_SIZES = ['sm', 'md', 'lg'] as const satisfies Sizes[]
export const BORDER_RADIUS_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const satisfies Sizes[]

type ThemeBackgroundLight = 'white'
type ThemeBackgroundDark = 'black'
type ThemeBackgroundColor = ThemeBackgroundLight | ThemeBackgroundDark
type BorderWidthSize = (typeof BORDER_WIDTH_SIZES)[number]
type BorderRadiusSize = (typeof BORDER_RADIUS_SIZES)[number]

export type NebkitProviderProps<T extends Theme = 'light'> = {
  children: ReactElement
  theme?: T
  brand?: Brand
  background?: T extends 'light' ? ThemeBackgroundLight : ThemeBackgroundDark
  borderWidthSize?: BorderWidthSize
  borderRadiusSize?: BorderRadiusSize
}
