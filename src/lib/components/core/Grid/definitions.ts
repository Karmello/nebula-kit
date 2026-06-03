import { ElementType } from 'react'

import { CssGridAutoFlow, CssGridPlaceContent, CssGridPlaceItems, CssValue, RespValue, TShirtSize } from 'lib/types'

import { BoxProps } from '../Box'

export type GridProps<T extends ElementType = 'div'> = BoxProps<T> & {
  gridTemplateColumns?: RespValue<string>
  gridTemplateRows?: RespValue<string>
  gridAutoRows?: RespValue<string>
  gridAutoColumns?: RespValue<string>
  gridAutoFlow?: RespValue<CssGridAutoFlow>
  placeItems?: RespValue<CssGridPlaceItems>
  placeContent?: RespValue<CssGridPlaceContent>
  gap?: RespValue<TShirtSize | CssValue>
  rowGap?: RespValue<TShirtSize | CssValue>
  columnGap?: RespValue<TShirtSize | CssValue>
}
