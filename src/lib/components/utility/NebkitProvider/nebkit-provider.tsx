import { ReactElement, useEffect, useLayoutEffect } from 'react'

import { useNebkitStore } from 'lib/state'
import { Theme } from 'lib/definitions'
import { resolveScale } from 'lib/helpers'

import { NebkitProviderProps, NEBKIT_THEME_BACKGROUNDS_MAP, DEFAULT_NEBKIT_BACKGROUND } from './definitions'

import 'lib/styles/index.scss'

export const NebkitProvider = <T extends Theme = 'light'>({
  children,
  theme,
  brand,
  background,
  borderWidthSize,
  borderRadiusSize,
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
    if (brand) nebkitStore.setBrand(brand)
    if (borderWidthSize) nebkitStore.setBorderWidthSize(borderWidthSize)
    if (borderRadiusSize) nebkitStore.setBorderRadiusSize(borderRadiusSize)
  }, [theme, brand, borderWidthSize, borderRadiusSize])

  useEffect(() => {
    const CSS_VAR_CONFIG =
      NEBKIT_THEME_BACKGROUNDS_MAP[background || DEFAULT_NEBKIT_BACKGROUND[nebkitStore.theme]]
    for (const cssVarName in CSS_VAR_CONFIG) {
      document.documentElement.style.setProperty(cssVarName, String(CSS_VAR_CONFIG[cssVarName]))
    }
    document?.documentElement.setAttribute('data-theme', nebkitStore.theme)
    document.documentElement.setAttribute('data-brand', nebkitStore.brand)
    document.documentElement.style.setProperty(
      '--neb-border-width',
      resolveScale(nebkitStore.borderWidth) || ''
    )
    document.documentElement.style.setProperty(
      '--neb-border-radius',
      resolveScale(nebkitStore.borderRadius) || ''
    )
  }, [nebkitStore])

  return children
}

NebkitProvider.displayName = 'NebkitProvider'
