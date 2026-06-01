import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components/shared'

import type {
  RespValue,
  TShirtSize,
  CssDisplay,
  CssOverflow,
  CssPointerEvents,
  CssPosition,
  CssTextAlign,
  CssValue,
  CssVisibility,
  BoxTheme,
  BoxColor,
  BoxVariant,
  BoxIntent,
  BoxSurface,
} from '../../../types'

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & {
  // surface
  drawable?: boolean
  elevated?: boolean
  theme?: RespValue<BoxTheme>
  brand?: RespValue<BoxColor>
  color?: RespValue<BoxColor>
  variant?: RespValue<BoxVariant>
  intent?: RespValue<BoxIntent>
  // interaction
  interactive?: boolean
  surface?: BoxSurface
  disabled?: boolean
  activeOnFocus?: boolean
  hidden?: RespValue<boolean>
  // css
  opacity?: RespValue<string>
  visibility?: RespValue<CssVisibility>
  textAlign?: RespValue<CssTextAlign>
  zIndex?: RespValue<number>
  pointerEvents?: CssPointerEvents
  aspectRatio?: RespValue<string>
  transform?: RespValue<string>
  // border
  borderWidth?: RespValue<string>
  borderTopWidth?: RespValue<string>
  borderRightWidth?: RespValue<string>
  borderBottomWidth?: RespValue<string>
  borderLeftWidth?: RespValue<string>
  // border radius
  borderRadius?: RespValue<string>
  borderTopLeftRadius?: RespValue<string>
  borderTopRightRadius?: RespValue<string>
  borderBottomRightRadius?: RespValue<string>
  borderBottomLeftRadius?: RespValue<string>
  // display
  display?: RespValue<CssDisplay>
  overflow?: RespValue<CssOverflow>
  overflowX?: RespValue<CssOverflow>
  overflowY?: RespValue<CssOverflow>
  // position
  position?: RespValue<CssPosition>
  inset?: RespValue<TShirtSize | CssValue>
  top?: RespValue<TShirtSize | CssValue>
  right?: RespValue<TShirtSize | CssValue>
  bottom?: RespValue<TShirtSize | CssValue>
  left?: RespValue<TShirtSize | CssValue>
  // size
  blockSize?: RespValue<TShirtSize | CssValue>
  minBlockSize?: RespValue<TShirtSize | CssValue>
  maxBlockSize?: RespValue<TShirtSize | CssValue>
  inlineSize?: RespValue<TShirtSize | CssValue>
  minInlineSize?: RespValue<TShirtSize | CssValue>
  maxInlineSize?: RespValue<TShirtSize | CssValue>
  // padding
  padding?: RespValue<TShirtSize | CssValue>
  paddingInline?: RespValue<TShirtSize | CssValue>
  paddingBlock?: RespValue<TShirtSize | CssValue>
  paddingTop?: RespValue<TShirtSize | CssValue>
  paddingRight?: RespValue<TShirtSize | CssValue>
  paddingBottom?: RespValue<TShirtSize | CssValue>
  paddingLeft?: RespValue<TShirtSize | CssValue>
  margin?: RespValue<TShirtSize | CssValue>
  marginInline?: RespValue<TShirtSize | CssValue>
  marginBlock?: RespValue<TShirtSize | CssValue>
  marginTop?: RespValue<TShirtSize | CssValue>
  marginRight?: RespValue<TShirtSize | CssValue>
  marginBottom?: RespValue<TShirtSize | CssValue>
  marginLeft?: RespValue<TShirtSize | CssValue>
}
