import { ReactElement } from 'react'

import { Brand, ScaleValue, Theme } from 'lib/definitions'

export const DEFAULT_NEBKIT_PROVIDER_THEME: Theme = 'light'
export const DEFAULT_NEBKIT_PROVIDER_BACKGROUND: Record<Theme, ThemeBackgroundColor> = {
  light: 'white',
  dark: 'black',
}
export const DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH: NebkitProviderProps['borderWidth'] = 2
export const DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS: ScaleValue = 4
export const DEFAULT_NEBKIT_PROVIDER_BRAND: Brand = 'purple'

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

export const BORDER_WIDTHS = [1, 2, 3] as const

type ThemeBackgroundLight = 'white'
type ThemeBackgroundDark = 'black'
type ThemeBackgroundColor = ThemeBackgroundLight | ThemeBackgroundDark
type BorderWidth = (typeof BORDER_WIDTHS)[number]

export type NebkitProviderProps<T extends Theme = 'light'> = {
  children: ReactElement
  theme?: T
  brand?: Brand
  background?: T extends 'light' ? ThemeBackgroundLight : ThemeBackgroundDark
  borderWidth?: BorderWidth
  borderRadius?: ScaleValue
}
