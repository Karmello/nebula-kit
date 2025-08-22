import { ReactElement, useEffect } from 'react'

import { useLibStore } from 'lib-2/state'
import { Theme, THEME_DEFAULT } from 'lib-2/definitions'

import 'lib-2/icons'

type LibProviderProps = { children: ReactElement; defaultTheme?: Theme }

export const LibProvider = ({ children, defaultTheme = THEME_DEFAULT }: LibProviderProps): ReactElement => {
  const { theme, setTheme } = useLibStore()

  useEffect(() => {
    setTheme(defaultTheme)
  }, [])

  useEffect(() => {
    document?.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return children
}
