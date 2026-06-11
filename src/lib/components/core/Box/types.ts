import { ElementType } from 'react'

import type {
  CssCursor,
  CssDisplay,
  CssOverflow,
  CssPointerEvents,
  CssPosition,
  CssTextAlign,
  CssValue,
  CssVisibility,
  RespValue,
  TShirtSize,
} from 'lib/types'

import { type HtmlTagProps } from '../HtmlTag/definitions'
import { BOX_COLORS, BOX_INTENTS, BOX_SURFACES, BOX_THEMES, BOX_VARIANTS } from './constants'

export type BoxTheme = (typeof BOX_THEMES)[number]
export type BoxVariant = (typeof BOX_VARIANTS)[number]
export type BoxIntent = (typeof BOX_INTENTS)[number]
export type BoxColor = (typeof BOX_COLORS)[number]
export type BoxSurface = (typeof BOX_SURFACES)[number]

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & {
  // surface
  drawable?: boolean
  elevated?: boolean
  theme?: RespValue<BoxTheme>
  brand?: BoxColor
  color?: BoxColor
  variant?: BoxVariant
  intent?: BoxIntent
  // interaction
  interactive?: boolean
  surface?: BoxSurface
  ripple?: boolean
  disabled?: boolean
  activeOnFocus?: boolean
  cursor?: CssCursor
  hidden?: RespValue<boolean>
  pointerEvents?: CssPointerEvents
  // appearance
  opacity?: RespValue<string>
  visibility?: RespValue<CssVisibility>
  textAlign?: RespValue<CssTextAlign>
  aspectRatio?: RespValue<string>
  transform?: RespValue<string>
  zIndex?: RespValue<number>
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
  // layout
  display?: RespValue<CssDisplay>
  overflow?: RespValue<CssOverflow>
  overflowX?: RespValue<CssOverflow>
  overflowY?: RespValue<CssOverflow>
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
  // margin
  margin?: RespValue<TShirtSize | CssValue>
  marginInline?: RespValue<TShirtSize | CssValue>
  marginBlock?: RespValue<TShirtSize | CssValue>
  marginTop?: RespValue<TShirtSize | CssValue>
  marginRight?: RespValue<TShirtSize | CssValue>
  marginBottom?: RespValue<TShirtSize | CssValue>
  marginLeft?: RespValue<TShirtSize | CssValue>
}
