import { ReactNode } from 'react'

import { RespValue } from 'lib/types'

import type { BoxTheme } from '../../Box/types'

export type ThemeContextValue = {
  theme?: RespValue<BoxTheme>
}

export type ThemeProviderProps = ThemeContextValue & {
  children: ReactNode
}
