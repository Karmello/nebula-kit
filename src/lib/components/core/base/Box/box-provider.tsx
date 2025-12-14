import { ReactNode, createContext, useContext, useMemo } from 'react'

import { BoxProps } from 'lib/components'

type BoxProviderProps = {
  children: ReactNode
  theme: BoxProps['theme']
}

type BoxContextValue = {
  theme: BoxProps['theme']
}

export const BoxProvider = ({ theme, children }: BoxProviderProps) => {
  const value = useMemo(() => ({ theme }), [theme])

  return <BoxContext.Provider value={value}>{children}</BoxContext.Provider>
}

export const BoxContext = createContext<BoxContextValue | undefined>(undefined)

export const useBoxContext = (): BoxContextValue | undefined => {
  return useContext(BoxContext)
}
