import { ReactNode } from 'react'

import type { BoxColor } from '../../Box/types'

export type BrandContextValue = {
  brand?: BoxColor
}

export type BrandProviderProps = BrandContextValue & {
  children: ReactNode
}
