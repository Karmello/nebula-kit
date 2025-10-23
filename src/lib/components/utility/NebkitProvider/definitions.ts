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
export const DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS: ScaleValue = 5
export const DEFAULT_NEBKIT_PROVIDER_BRAND: Brand = 'gray'

export const THEME_BACKGROUNDS_MAP: Record<ThemeBackgroundColor, object> = {
  white: {
    '--neb-background': 'var(--neb-gray-1)',
    '--neb-text': 'var(--neb-gray-13)',
    '--neb-focus-border': 'var(--neb-gray-15)',
    '--neb-inverse-ghost-text': 'var(--neb-gray-3)',
    '--neb-inverse-outline-border': 'var(--neb-gray-10)',
    '--neb-inverse-outline-border-hover': 'var(--neb-gray-12)',
    '--neb-inverse-outline-border-active': 'var(--neb-gray-15)',
    '--neb-inverse-outline-bg-hover': 'var(--neb-gray-2)',
    '--neb-inverse-outline-bg-active': 'var(--neb-gray-4)',
    '--neb-inverse-solid-bg': 'var(--neb-gray-12)',
    '--neb-inverse-solid-bg-hover': 'var(--neb-gray-13)',
    '--neb-inverse-solid-bg-active': 'var(--neb-gray-15)',
  },
  black: {
    '--neb-background': 'var(--neb-gray-15)',
    '--neb-text': 'var(--neb-gray-1)',
    '--neb-focus-border': 'var(--neb-gray-1)',
    '--neb-inverse-ghost-text': 'var(--neb-gray-13)',
    '--neb-inverse-outline-border': 'var(--neb-gray-7)',
    '--neb-inverse-outline-border-hover': 'var(--neb-gray-5)',
    '--neb-inverse-outline-border-active': 'var(--neb-gray-1)',
    '--neb-inverse-outline-bg-hover': 'var(--neb-gray-14)',
    '--neb-inverse-outline-bg-active': 'var(--neb-gray-13)',
    '--neb-inverse-solid-bg': 'var(--neb-gray-5)',
    '--neb-inverse-solid-bg-hover': 'var(--neb-gray-4)',
    '--neb-inverse-solid-bg-active': 'var(--neb-gray-1)',
  },
}

export type NebkitProviderProps<T extends Theme = 'light'> = {
  children: ReactElement
  theme?: T
  brand?: Brand
  background?: T extends 'light' ? ThemeBackgroundLight : ThemeBackgroundDark
  borderRadius?: ScaleValue | string
}
