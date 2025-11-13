import { ReactElement, useLayoutEffect } from 'react'

import { useNebkitStore } from 'lib/state'
import { Theme } from 'lib/definitions'
import { resolveScale } from 'lib/helpers'

import { NebkitProviderProps } from './definitions'

import 'lib/styles/index.scss'

export const NebkitProvider = <T extends Theme = 'light'>({
  children,
  theme,
  brand,
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

  useLayoutEffect(() => {
    if (theme) nebkitStore.setTheme(theme)
    if (brand) nebkitStore.setBrand(brand)
    if (borderWidthSize) nebkitStore.setBorderWidthSize(borderWidthSize)
    if (borderRadiusSize) nebkitStore.setBorderRadiusSize(borderRadiusSize)
  }, [theme, brand, borderWidthSize, borderRadiusSize])

  useLayoutEffect(() => {
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
