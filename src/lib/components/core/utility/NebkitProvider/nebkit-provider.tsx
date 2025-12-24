import { ReactElement, useLayoutEffect } from 'react'

import { useNebkitStore } from 'lib/state'

import {
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_THEME,
  NebkitProviderProps,
} from './definitions'

export const NebkitProvider = ({
  children,
  theme = DEFAULT_NEBKIT_THEME,
  brand = DEFAULT_NEBKIT_BRAND,
  borderRadiusSize = DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
}: NebkitProviderProps): ReactElement => {
  const nebkitStore = useNebkitStore()

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('neb:hydrated'))
      requestAnimationFrame(() => {
        document.documentElement.classList.add('neb-transitions')
      })
    })
  }, [])

  useLayoutEffect(() => {
    if (theme) nebkitStore.setTheme(theme)
    if (brand) nebkitStore.setBrand(brand)
    if (borderRadiusSize) nebkitStore.setBorderRadiusSize(borderRadiusSize)
  }, [theme, brand, borderRadiusSize])

  useLayoutEffect(() => {
    document.documentElement.classList.remove('neb-transitions')
    document?.documentElement.setAttribute('data-theme', nebkitStore.theme)
    document.documentElement.setAttribute('data-brand', nebkitStore.brand)
    document.documentElement.style.setProperty('--neb-border-radius', nebkitStore.borderRadius || '')
    requestAnimationFrame(() => {
      document.documentElement.classList.add('neb-transitions')
    })
  }, [nebkitStore])

  return children
}

NebkitProvider.displayName = 'NebkitProvider'
