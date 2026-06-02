import { ElementType } from 'react'

import { BoxProps } from 'lib/index.core'
import { CssFlexItemAlignSelf, RespValue } from 'lib/types'

export type FlexItemProps<T extends ElementType = 'div'> = BoxProps<T> & {
  flex?: RespValue<string>
  flexGrow?: RespValue<string>
  flexShrink?: RespValue<string>
  flexBasis?: RespValue<string>
  alignSelf?: RespValue<CssFlexItemAlignSelf>
  order?: RespValue<string>
}
