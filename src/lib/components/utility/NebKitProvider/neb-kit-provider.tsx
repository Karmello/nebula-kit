import { ReactElement, useEffect } from 'react'

import { useLibStore } from 'lib/state'
import { Theme } from 'lib/definitions'

import 'lib/icons'
import 'lib/styles/index.scss'

export type NebKitProviderProps = { children: ReactElement; defaultTheme?: Theme }

export const NebKitProvider = ({
  children,
  defaultTheme = Theme.DEFAULT,
}: NebKitProviderProps): ReactElement => {
  const { theme, setTheme } = useLibStore()

  useEffect(() => {
    setTheme(defaultTheme)
  }, [])

  useEffect(() => {
    document?.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return children
}
