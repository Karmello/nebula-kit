import { ReactElement } from 'react'

import { Brand, ScaleValue, Theme } from 'lib/definitions'

type ThemeBackgroundLight = 'white'
type ThemeBackgroundDark = 'black'
type ThemeBackgroundColor = ThemeBackgroundLight | ThemeBackgroundDark

export const DEFAULT_NEBKIT_PROVIDER_THEME: Theme = 'light'
export const DEFAULT_NEBKIT_PROVIDER_BACKGROUND: Record<Theme, ThemeBackgroundColor> = {
  light: 'white',
  dark: 'black',
}
export const DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH: ScaleValue = 1
export const DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS: ScaleValue = 2
export const DEFAULT_NEBKIT_PROVIDER_BRAND: Brand = 'gray'

export const THEME_BACKGROUNDS_MAP: Record<ThemeBackgroundColor, object> = {
  white: {
    '--neb-background': 'var(--neb-gray-1)',
    '--neb-text': 'var(--neb-gray-11)',
    '--neb-focus-border': 'var(--neb-gray-11)',
  },
  black: {
    '--neb-background': 'var(--neb-gray-11)',
    '--neb-text': 'var(--neb-gray-1)',
    '--neb-focus-border': 'var(--neb-gray-1)',
  },
}

export type NebkitProviderProps<T extends Theme = 'light'> = {
  children: ReactElement
  theme?: T
  brand?: Brand
  background?: T extends 'light' ? ThemeBackgroundLight : ThemeBackgroundDark
  borderWidth?: ScaleValue | string
  borderRadius?: ScaleValue | string
}
