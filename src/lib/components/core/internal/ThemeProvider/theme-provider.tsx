import { createContext, useContext, useMemo } from 'react'

import { RespValue } from 'lib/definitions'
import { BoxTheme } from 'lib/components/core/base/Box'

type ThemeContextValue = {
  theme?: RespValue<BoxTheme>
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
