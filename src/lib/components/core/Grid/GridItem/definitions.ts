import { ElementType } from 'react'

import { BoxProps } from 'lib/index.core'
import { CssGridItemAlignSelf, CssGridItemJustifySelf, RespValue } from 'lib/types'

export type GridItemProps<T extends ElementType = 'div'> = BoxProps<T> & {
  gridColumn?: RespValue<string>
  gridRow?: RespValue<string>
  justifySelf?: RespValue<CssGridItemJustifySelf>
  alignSelf?: RespValue<CssGridItemAlignSelf>
}
