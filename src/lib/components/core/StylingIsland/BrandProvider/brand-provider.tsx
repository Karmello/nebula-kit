import { createContext, useContext, useMemo } from 'react'

import type { BrandContextValue, BrandProviderProps } from './types'

const BrandContext = createContext<BrandContextValue | null>(null)

export const useBrandContext = () => useContext(BrandContext)

export const BrandProvider = ({ children, brand }: BrandProviderProps) => {
  const parent = useBrandContext()

  const value = useMemo(() => {
    if (brand === undefined) return parent
    return { brand }
  }, [brand, parent])

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

BrandProvider.displayName = 'BrandProvider'
