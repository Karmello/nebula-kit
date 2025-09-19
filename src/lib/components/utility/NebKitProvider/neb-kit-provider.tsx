import { ReactElement, useEffect, useLayoutEffect } from 'react'

import { DEFAULT_BORDER_RADIUS, DEFAULT_THEME } from 'lib/definitions'
import { useLibStore } from 'lib/state'

import { NebKitProviderProps } from './definitions'
import 'lib/styles/index.scss'

export const NebKitProvider = ({
  children,
  defaultTheme = DEFAULT_THEME,
  defaultBorderRadius = DEFAULT_BORDER_RADIUS,
}: NebKitProviderProps): ReactElement => {
  const { theme, setTheme, setBorderRadius } = useLibStore()

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('neb:hydrated'))
      requestAnimationFrame(() => {
        document.documentElement.classList.add('neb-transitions')
      })
    })
  }, [])

  useEffect(() => {
    setTheme(defaultTheme)
    setBorderRadius(defaultBorderRadius)

    document.documentElement.style.setProperty('--neb-border-radius', `${defaultBorderRadius}px`)
  }, [])

  useEffect(() => {
    document?.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return children
}

NebKitProvider.displayName = 'NebKitProvider'
