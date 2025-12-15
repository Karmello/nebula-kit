import { createContext, useContext, useMemo } from 'react'

import { Color, RespValue, Theme } from 'lib/definitions'

type IslandContextValue = {
  theme: RespValue<Theme>
  brand: RespValue<Color>
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
