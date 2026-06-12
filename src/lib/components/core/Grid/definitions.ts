import { ElementType } from 'react'

import type {
  CssGridAutoFlow,
  CssGridDisplay,
  CssGridPlaceContent,
  CssGridPlaceItems,
  CssValue,
  Length,
  RespValue,
} from 'lib/types'

import { BoxProps } from '../Box'

export type GridProps<T extends ElementType = 'div'> = Omit<BoxProps<T>, 'display'> & {
  display?: RespValue<CssGridDisplay>
  gridTemplateColumns?: RespValue<string>
  gridTemplateRows?: RespValue<string>
  gridAutoRows?: RespValue<string>
  gridAutoColumns?: RespValue<string>
  gridAutoFlow?: RespValue<CssGridAutoFlow>
  placeItems?: RespValue<CssGridPlaceItems>
  placeContent?: RespValue<CssGridPlaceContent>
  gap?: RespValue<Length | CssValue>
  rowGap?: RespValue<Length | CssValue>
  columnGap?: RespValue<Length | CssValue>
}
