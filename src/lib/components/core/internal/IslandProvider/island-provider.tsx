import { createContext, useContext, useMemo } from 'react'

import { RespValue, Theme } from 'lib/definitions'
import { BoxColor } from 'lib/components/core/base/Box'

type IslandContextValue = {
  theme?: RespValue<Theme>
  brand?: RespValue<BoxColor>
}

type IslandProviderProps = IslandContextValue & {
  children: React.ReactNode
}

export const IslandProvider = ({ children, theme, brand }: IslandProviderProps) => {
  const value = useMemo(() => ({ theme, brand }), [theme, brand])

  return <IslandContext.Provider value={value}>{children}</IslandContext.Provider>
}

const IslandContext = createContext<IslandContextValue | null>(null)

export const useIslandContext = () => useContext(IslandContext)
