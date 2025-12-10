import { ReactElement, useLayoutEffect } from 'react'

import { useNebkitStore } from 'lib/state'
import { Theme } from 'lib/definitions'
import { resolveScale } from 'lib/helpers'

import { NebkitProviderProps } from './definitions'

export const NebkitProvider = <T extends Theme = 'light'>({
  children,
  theme,
  brand,
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
    if (borderRadiusSize) nebkitStore.setBorderRadiusSize(borderRadiusSize)
  }, [theme, brand, borderRadiusSize])

  useLayoutEffect(() => {
    document?.documentElement.setAttribute('data-theme', nebkitStore.theme)
    document.documentElement.setAttribute('data-brand', nebkitStore.brand)
    document.documentElement.style.setProperty(
      '--neb-border-radius',
      resolveScale(nebkitStore.borderRadius) || ''
    )
  }, [nebkitStore])

  return children
}

NebkitProvider.displayName = 'NebkitProvider'
