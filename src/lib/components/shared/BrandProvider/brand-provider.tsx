import { createContext, useContext, useMemo } from 'react'

import { BoxColor } from 'lib/components/core/Box/types'
import { RespValue } from 'lib/types'

type BrandContextValue = {
  brand?: RespValue<BoxColor>
}

type BrandProviderProps = BrandContextValue & {
  children: React.ReactNode
}

export const BrandProvider = ({ children, brand }: BrandProviderProps) => {
  const parent = useBrandContext()

  const value = useMemo(() => {
    if (brand === undefined) return parent
    return { brand }
  }, [brand, parent])

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

const BrandContext = createContext<BrandContextValue | null>(null)

export const useBrandContext = () => useContext(BrandContext)
