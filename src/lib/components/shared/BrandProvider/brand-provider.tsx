import { createContext, useContext, useMemo } from 'react'

import type { BoxProps } from '../../core/Box/types'

type BrandContextValue = {
  brand?: BoxProps['color']
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
