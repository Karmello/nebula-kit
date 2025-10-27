import { ReactElement, useEffect, useLayoutEffect } from 'react'

import { useNebkitStore } from 'lib/state'
import { Theme } from 'lib/definitions'
import { scale } from 'lib/helpers'

import {
  NebkitProviderProps,
  THEME_BACKGROUNDS_MAP,
  DEFAULT_NEBKIT_PROVIDER_BACKGROUND,
  DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH,
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
  DEFAULT_NEBKIT_PROVIDER_BRAND,
} from './definitions'

import 'lib/styles/index.scss'

export const NebkitProvider = <T extends Theme = 'light'>({
  children,
  theme,
  brand = DEFAULT_NEBKIT_PROVIDER_BRAND,
  background,
  borderWidth = DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH,
  borderRadius = DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
}: NebkitProviderProps<T>): ReactElement => {
  const nebkitStore = useNebkitStore()

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('neb:hydrated'))
      requestAnimationFrame(() => {
        document.documentElement.classList.add('neb-transitions')
      })
    })
  }, [])

  useEffect(() => {
    if (theme) nebkitStore.setTheme(theme)
    nebkitStore.setBrand(brand)
    nebkitStore.setBorderWidth(borderWidth)
    nebkitStore.setBorderRadius(borderRadius)
  }, [theme, brand, borderWidth, borderRadius])

  useEffect(() => {
    const CSS_VAR_CONFIG =
      THEME_BACKGROUNDS_MAP[background || DEFAULT_NEBKIT_PROVIDER_BACKGROUND[nebkitStore.theme]]
    for (const cssVarName in CSS_VAR_CONFIG) {
      document.documentElement.style.setProperty(cssVarName, String(CSS_VAR_CONFIG[cssVarName]))
    }
    document?.documentElement.setAttribute('data-theme', nebkitStore.theme)
  }, [nebkitStore.theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', nebkitStore.brand)
  }, [nebkitStore.brand])

  useEffect(() => {
    document.documentElement.style.setProperty('--neb-border-width', scale(nebkitStore.borderWidth) || '')
  }, [nebkitStore.borderWidth])

  useEffect(() => {
    document.documentElement.style.setProperty('--neb-border-radius', scale(nebkitStore.borderRadius) || '')
  }, [nebkitStore.borderRadius])

  return children
}

NebkitProvider.displayName = 'NebkitProvider'
