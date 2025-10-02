import { ReactElement, useEffect, useLayoutEffect } from 'react'

import { useLibStore } from 'lib/state'
import { Theme } from 'lib/definitions'

import {
  THEME_BACKGROUNDS_MAP,
  DEFAULT_NEBKIT_PROVIDER_BACKGROUND,
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
  DEFAULT_NEBKIT_PROVIDER_THEME,
  NebkitProviderProps,
} from './definitions'

import 'lib/styles/index.scss'

export const NebkitProvider = <T extends Theme = 'light'>({
  children,
  theme = DEFAULT_NEBKIT_PROVIDER_THEME as T,
  background,
  borderRadius = DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
}: NebkitProviderProps<T>): ReactElement => {
  const libStore = useLibStore()

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('neb:hydrated'))
      requestAnimationFrame(() => {
        document.documentElement.classList.add('neb-transitions')
      })
    })
  }, [])

  useEffect(() => {
    libStore.setTheme(theme)
    libStore.setBorderRadius(borderRadius)

    document.documentElement.style.setProperty('--neb-border-radius', `${borderRadius}px`)

    const CSS_VAR_CONFIG = THEME_BACKGROUNDS_MAP[background || DEFAULT_NEBKIT_PROVIDER_BACKGROUND[theme]]

    for (const cssVarName in CSS_VAR_CONFIG) {
      document.documentElement.style.setProperty(cssVarName, String(CSS_VAR_CONFIG[cssVarName]))
    }
  }, [])

  useEffect(() => {
    document?.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return children
}

NebkitProvider.displayName = 'NebkitProvider'
