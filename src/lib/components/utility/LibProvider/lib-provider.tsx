import { ReactElement, useEffect } from 'react'

import { useLibStore } from 'lib/state'
import { Theme } from 'lib/definitions'

import 'lib/icons'

type LibProviderProps = { children: ReactElement; defaultTheme?: Theme }

export const LibProvider = ({ children, defaultTheme = Theme.DEFAULT }: LibProviderProps): ReactElement => {
  const { theme, setTheme } = useLibStore()

  useEffect(() => {
    setTheme(defaultTheme)
  }, [])

  useEffect(() => {
    document?.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return children
}
