import { ReactElement, useEffect, useLayoutEffect } from 'react'

import { DEFAULT_BORDER_RADIUS, DEFAULT_THEME, ScaleValue, Theme } from 'lib/definitions'
import { useLibStore } from 'lib/state'

import 'lib/styles/index.scss'

export type NebKitProviderProps = {
  children: ReactElement
  defaultTheme?: Theme
  defaultBorderRadius?: ScaleValue | string
}

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
  }, [])

  useEffect(() => {
    document?.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return children
}

NebKitProvider.displayName = 'NebKitProvider'
