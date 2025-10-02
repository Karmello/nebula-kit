import { ReactElement } from 'react'

import { ScaleValue, Theme } from 'lib/definitions'

type ThemeBackgroundLight = 'white'
type ThemeBackgroundDark = 'black'
type ThemeBackgroundColor = ThemeBackgroundLight | ThemeBackgroundDark

export const DEFAULT_NEBKIT_PROVIDER_THEME: Theme = 'light'
export const DEFAULT_NEBKIT_PROVIDER_BACKGROUND: Record<Theme, ThemeBackgroundColor> = {
  light: 'white',
  dark: 'black',
}
export const DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS: ScaleValue = 0

export const THEME_BACKGROUNDS_MAP: Record<ThemeBackgroundColor, object> = {
  white: {
    '--neb-background': 'var(--neb-gray-1)',
    '--neb-text': 'var(--neb-gray-9)',
    '--neb-border': 'var(--neb-gray-9)',
    '--neb-neutral-solid-bg': 'var(--neb-gray-1)',
    '--neb-neutral-solid-bg-hover': 'var(--neb-gray-2)',
    '--neb-neutral-solid-bg-active': 'var(--neb-gray-3)',
    '--neb-neutral-solid-text': 'var(--neb-gray-9)',
    '--neb-neutral-outline-border': 'var(--neb-gray-1)',
    '--neb-neutral-outline-border-hover': 'var(--neb-gray-3)',
    '--neb-neutral-outline-border-active': 'var(--neb-gray-4)',
    '--neb-neutral-outline-bg-hover': 'var(--neb-gray-2)',
    '--neb-neutral-outline-bg-active': 'var(--neb-gray-3)',
    '--neb-neutral-outline-text': 'var(--neb-gray-9)',
    '--neb-inverse-solid-bg': 'var(--neb-gray-6)',
    '--neb-inverse-solid-bg-hover': 'var(--neb-gray-7)',
    '--neb-inverse-solid-bg-active': 'var(--neb-gray-9)',
    '--neb-inverse-solid-text': 'var(--neb-gray-1)',
    '--neb-inverse-outline-border': 'var(--neb-gray-6)',
    '--neb-inverse-outline-border-hover': 'var(--neb-gray-7)',
    '--neb-inverse-outline-border-active': 'var(--neb-gray-9)',
    '--neb-inverse-outline-bg-hover': 'var(--neb-gray-2)',
    '--neb-inverse-outline-bg-active': 'var(--neb-gray-3)',
    '--neb-inverse-outline-text': 'var(--neb-gray-9)',
    '--neb-inverse-ghost-text': 'var(--neb-gray-2)',
  },
  black: {
    '--neb-background': 'var(--neb-gray-9)',
    '--neb-text': 'var(--neb-gray-1)',
    '--neb-neutral-solid-bg-hover': 'var(--neb-gray-8)',
    '--neb-neutral-solid-bg-active': 'var(--neb-gray-7)',
    '--neb-neutral-outline-bg-hover': 'var(--neb-gray-8)',
    '--neb-neutral-outline-bg-active': 'var(--neb-gray-7)',
    '--neb-inverse-solid-bg': 'var(--neb-gray-3)',
    '--neb-inverse-solid-bg-hover': 'var(--neb-gray-2)',
    '--neb-inverse-solid-bg-active': 'var(--neb-gray-1)',
    '--neb-inverse-solid-text': 'var(--neb-gray-9)',
    '--neb-inverse-outline-bg': 'var(--neb-gray-3)',
    '--neb-inverse-outline-bg-hover': 'var(--neb-gray-2)',
    '--neb-inverse-outline-bg-active': 'var(--neb-gray-1)',
    '--neb-inverse-outline-text': 'var(--neb-gray-9)',
  },
}

export type NebkitProviderProps<T extends Theme = 'light'> = {
  children: ReactElement
  theme?: T
  background?: T extends 'light' ? ThemeBackgroundLight : ThemeBackgroundDark
  borderRadius?: ScaleValue | string
}
