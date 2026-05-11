import { ElementType } from 'react'

import {
  COLORS,
  CssDisplay,
  CssOverflow,
  CssPointerEvents,
  CssPosition,
  CssTextAlign,
  CssValue,
  CssVisibility,
  RespValue,
  THEMES,
  TShirtSize,
} from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

export const BOX_THEMES = [...THEMES, 'flipped'] as const
export const BOX_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const
export const BOX_INTENTS = ['neutral', 'muted', 'tertiary', 'secondary', 'primary', 'inverse'] as const
export const BOX_SURFACES = ['selected', 'dividing'] as const

export type BoxTheme = (typeof BOX_THEMES)[number]
export type BoxVariant = (typeof BOX_VARIANTS)[number]
export type BoxIntent = (typeof BOX_INTENTS)[number]
export type BoxColor = (typeof COLORS)[number]
export type BoxSurface = (typeof BOX_SURFACES)[number]

type BoxOwnProps = {
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

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & BoxOwnProps
