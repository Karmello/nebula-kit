import { createContext, useContext, useMemo } from 'react'

import { RespValue, Theme } from 'lib/definitions'

type ThemeContextValue = {
  theme?: RespValue<Theme>
}

type ThemeProviderProps = ThemeContextValue & {
  children: React.ReactNode
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const parent = useThemeContext()

  const value = useMemo(() => {
    if (theme === undefined) return parent
    return { theme }
  }, [theme, parent])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const useThemeContext = () => useContext(ThemeContext)
