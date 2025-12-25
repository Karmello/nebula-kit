import { ReactElement, useLayoutEffect } from 'react'

import {
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_THEME,
  NEBKIT_SIZES_MAP,
  NebkitProviderProps,
} from './definitions'

export const NebkitProvider = ({
  children,
  theme = DEFAULT_NEBKIT_THEME,
  brand = DEFAULT_NEBKIT_BRAND,
  borderRadiusSize = DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
}: NebkitProviderProps): ReactElement => {
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('neb:hydrated'))
      requestAnimationFrame(() => {
        document.documentElement.classList.add('neb-transitions')
      })
    })
  }, [])

  useLayoutEffect(() => {
    document.documentElement.classList.remove('neb-transitions')

    document?.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-brand', brand)
    document.documentElement.style.setProperty(
      '--neb-border-radius',
      NEBKIT_SIZES_MAP.borderRadiusSize[borderRadiusSize || 'md'] || ''
    )

    requestAnimationFrame(() => {
      document.documentElement.classList.add('neb-transitions')
    })
  }, [theme, brand, borderRadiusSize])

  return children
}

NebkitProvider.displayName = 'NebkitProvider'
