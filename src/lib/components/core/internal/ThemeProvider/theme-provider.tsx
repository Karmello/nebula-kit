import { createContext, useContext, useMemo } from 'react'

import { RespValue, Theme } from 'lib/definitions'

type ThemeContextValue = {
  theme?: RespValue<Theme>
}

type ThemeProviderProps = ThemeContextValue & {
  children: React.ReactNode
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const value = useMemo(() => ({ theme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const useThemeContext = () => useContext(ThemeContext)
