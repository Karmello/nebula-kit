import { ReactElement, useEffect } from 'react'

import { DEFAULT_BORDER_RADIUS, DEFAULT_THEME, ScaleValue, Theme } from 'lib/definitions'
import { useLibStore } from 'lib/state'

import '@fontsource-variable/inter'
import 'lib/icons'
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
