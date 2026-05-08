import { ElementType } from 'react'

import {
  COLORS,
  CssDisplay,
  CssOverflow,
  CssPointerEvents,
  CssPosition,
  CssTextAlign,
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
export const BOX_BORDER_WIDTH = '2px'

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
  inset?: RespValue<TShirtSize | string>
  top?: RespValue<TShirtSize | string>
  right?: RespValue<TShirtSize | string>
  bottom?: RespValue<TShirtSize | string>
  left?: RespValue<TShirtSize | string>
  // size
  blockSize?: RespValue<TShirtSize | string>
  minBlockSize?: RespValue<TShirtSize | string>
  maxBlockSize?: RespValue<TShirtSize | string>
  inlineSize?: RespValue<TShirtSize | string>
  minInlineSize?: RespValue<TShirtSize | string>
  maxInlineSize?: RespValue<TShirtSize | string>
  // padding
  padding?: RespValue<TShirtSize | string>
  paddingInline?: RespValue<TShirtSize | string>
  paddingBlock?: RespValue<TShirtSize | string>
  paddingTop?: RespValue<TShirtSize | string>
  paddingRight?: RespValue<TShirtSize | string>
  paddingBottom?: RespValue<TShirtSize | string>
  paddingLeft?: RespValue<TShirtSize | string>
  margin?: RespValue<TShirtSize | string>
  marginInline?: RespValue<TShirtSize | string>
  marginBlock?: RespValue<TShirtSize | string>
  marginTop?: RespValue<TShirtSize | string>
  marginRight?: RespValue<TShirtSize | string>
  marginBottom?: RespValue<TShirtSize | string>
  marginLeft?: RespValue<TShirtSize | string>
}

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & BoxOwnProps
