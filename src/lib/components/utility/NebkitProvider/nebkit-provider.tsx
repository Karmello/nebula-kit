import { ReactElement, useEffect, useLayoutEffect } from 'react'

import { useNebkitStore } from 'lib/state'
import { Theme } from 'lib/definitions'

import {
  THEME_BACKGROUNDS_MAP,
  DEFAULT_NEBKIT_PROVIDER_BACKGROUND,
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
  DEFAULT_NEBKIT_PROVIDER_THEME,
  DEFAULT_NEBKIT_PROVIDER_BRAND,
  NebkitProviderProps,
} from './definitions'

import 'lib/styles/index.scss'

export const NebkitProvider = <T extends Theme = 'light'>({
  children,
  theme,
  brand = DEFAULT_NEBKIT_PROVIDER_BRAND,
  background,
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
    nebkitStore.setBorderRadius(borderRadius)
    document.documentElement.style.setProperty('--neb-border-radius', `${borderRadius}px`)
  }, [borderRadius, brand])

  useEffect(() => {
    if (theme) {
      nebkitStore.setTheme(theme)
    } else {
      // if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      //   nebkitStore.setTheme('light')
      // } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //   nebkitStore.setTheme('dark')
      // } else {
      //   nebkitStore.setTheme(DEFAULT_NEBKIT_PROVIDER_THEME)
      // }
    }
  }, [theme])

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

  return children
}

NebkitProvider.displayName = 'NebkitProvider'
