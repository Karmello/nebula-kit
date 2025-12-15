import { ReactNode, createContext, useContext, useMemo } from 'react'

import { BoxProps } from 'lib/components'

type BoxProviderProps = {
  children: ReactNode
} & BoxContextValue

type BoxContextValue = {
  theme: BoxProps['theme']
  brand: BoxProps['brand']
}

export const BoxProvider = ({ theme, brand, children }: BoxProviderProps) => {
  const value = useMemo(() => ({ theme, brand }), [theme, brand])

  return <BoxContext.Provider value={value}>{children}</BoxContext.Provider>
}

export const BoxContext = createContext<BoxContextValue | undefined>(undefined)

export const useBoxContext = (): BoxContextValue | undefined => {
  return useContext(BoxContext)
}
