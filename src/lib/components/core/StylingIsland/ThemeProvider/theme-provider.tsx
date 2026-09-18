import { createContext, useContext, useMemo } from 'react'

import type { ThemeContextValue, ThemeProviderProps } from './types'

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const parent = useThemeContext()

  const value = useMemo(() => {
    if (theme === undefined) return parent
    return { theme }
  }, [theme, parent])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.displayName = 'ThemeProvider'
