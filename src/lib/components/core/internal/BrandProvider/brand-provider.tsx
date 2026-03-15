import { createContext, useContext, useMemo } from 'react'

import { RespValue } from 'lib/definitions'
import { BoxColor } from 'lib/components/core/base/Box'

type BrandContextValue = {
  brand?: RespValue<BoxColor>
}

type BrandProviderProps = BrandContextValue & {
  children: React.ReactNode
}

export const BrandProvider = ({ children, brand }: BrandProviderProps) => {
  const value = useMemo(() => ({ brand }), [brand])

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

const BrandContext = createContext<BrandContextValue | null>(null)

export const useBrandContext = () => useContext(BrandContext)
