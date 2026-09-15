import { ReactNode } from 'react'

import { RespValue } from 'lib/types'

import type { BoxColor, BoxTheme } from '../Box/types'

export type StylingIslandProps = {
  children: ReactNode
  theme?: RespValue<BoxTheme>
  brand?: BoxColor
}
