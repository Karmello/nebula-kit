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
  Length,
  RespValue,
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
  borderWidth?: RespValue<Length | CssValue>
  borderTopWidth?: RespValue<Length | CssValue>
  borderRightWidth?: RespValue<Length | CssValue>
  borderBottomWidth?: RespValue<Length | CssValue>
  borderLeftWidth?: RespValue<Length | CssValue>
  // border radius
  borderRadius?: RespValue<Length | CssValue>
  borderTopLeftRadius?: RespValue<Length | CssValue>
  borderTopRightRadius?: RespValue<Length | CssValue>
  borderBottomRightRadius?: RespValue<Length | CssValue>
  borderBottomLeftRadius?: RespValue<Length | CssValue>
  // layout
  display?: RespValue<CssDisplay>
  overflow?: RespValue<CssOverflow>
  overflowX?: RespValue<CssOverflow>
  overflowY?: RespValue<CssOverflow>
  position?: RespValue<CssPosition>
  inset?: RespValue<Length | CssValue>
  top?: RespValue<Length | CssValue>
  right?: RespValue<Length | CssValue>
  bottom?: RespValue<Length | CssValue>
  left?: RespValue<Length | CssValue>
  // size
  blockSize?: RespValue<Length | CssValue>
  minBlockSize?: RespValue<Length | CssValue>
  maxBlockSize?: RespValue<Length | CssValue>
  inlineSize?: RespValue<Length | CssValue>
  minInlineSize?: RespValue<Length | CssValue>
  maxInlineSize?: RespValue<Length | CssValue>
  // padding
  padding?: RespValue<Length | CssValue>
  paddingInline?: RespValue<Length | CssValue>
  paddingBlock?: RespValue<Length | CssValue>
  paddingTop?: RespValue<Length | CssValue>
  paddingRight?: RespValue<Length | CssValue>
  paddingBottom?: RespValue<Length | CssValue>
  paddingLeft?: RespValue<Length | CssValue>
  // margin
  margin?: RespValue<Length | CssValue>
  marginInline?: RespValue<Length | CssValue>
  marginBlock?: RespValue<Length | CssValue>
  marginTop?: RespValue<Length | CssValue>
  marginRight?: RespValue<Length | CssValue>
  marginBottom?: RespValue<Length | CssValue>
  marginLeft?: RespValue<Length | CssValue>
}
