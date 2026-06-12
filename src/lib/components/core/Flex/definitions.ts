import { ElementType } from 'react'

import {
  CssFlexAlignContent,
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexDisplay,
  CssFlexJustifyContent,
  CssFlexWrap,
  CssValue,
  Length,
  RespValue,
} from 'lib/types'

import { BoxProps } from '../Box'

export type FlexProps<T extends ElementType = 'div'> = Omit<BoxProps<T>, 'display'> & {
  display?: RespValue<CssFlexDisplay>
  flexDirection?: RespValue<CssFlexDirection>
  flexWrap?: RespValue<CssFlexWrap>
  justifyContent?: RespValue<CssFlexJustifyContent>
  alignItems?: RespValue<CssFlexAlignItems>
  alignContent?: RespValue<CssFlexAlignContent>
  gap?: RespValue<Length | CssValue>
  rowGap?: RespValue<Length | CssValue>
  columnGap?: RespValue<Length | CssValue>
}
