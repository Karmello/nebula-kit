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
  CssLength,
} from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

export const BOX_THEMES = [...THEMES, 'flipped'] as const
export const BOX_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const
export const BOX_INTENTS = ['neutral', 'muted', 'tertiary', 'secondary', 'primary', 'inverse'] as const
export const BOX_SURFACES = ['raised', 'elevated'] as const
export const BOX_BORDER_WIDTH = '2px'

export type BoxTheme = (typeof BOX_THEMES)[number]
export type BoxVariant = (typeof BOX_VARIANTS)[number]
export type BoxIntent = (typeof BOX_INTENTS)[number]
export type BoxSurface = (typeof BOX_SURFACES)[number]
export type BoxColor = (typeof COLORS)[number]

type BoxOwnProps = {
  // surface
  drawable?: boolean
  surface?: BoxSurface
  theme?: RespValue<BoxTheme>
  brand?: RespValue<BoxColor>
  color?: RespValue<BoxColor>
  variant?: RespValue<BoxVariant>
  intent?: RespValue<BoxIntent>
  // interaction
  interactive?: boolean
  selected?: boolean
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
  inset?: RespValue<string>
  top?: RespValue<string>
  right?: RespValue<string>
  bottom?: RespValue<string>
  left?: RespValue<string>
  // size
  blockSize?: RespValue<TShirtSize | CssLength>
  minBlockSize?: RespValue<TShirtSize | CssLength>
  maxBlockSize?: RespValue<TShirtSize | CssLength>
  inlineSize?: RespValue<TShirtSize | CssLength>
  minInlineSize?: RespValue<TShirtSize | CssLength>
  maxInlineSize?: RespValue<TShirtSize | CssLength>
  // padding
  padding?: RespValue<TShirtSize | CssLength>
  paddingInline?: RespValue<TShirtSize | CssLength>
  paddingBlock?: RespValue<TShirtSize | CssLength>
  paddingTop?: RespValue<TShirtSize | CssLength>
  paddingRight?: RespValue<TShirtSize | CssLength>
  paddingBottom?: RespValue<TShirtSize | CssLength>
  paddingLeft?: RespValue<TShirtSize | CssLength>
  // margin
  margin?: RespValue<
    | TShirtSize
    | CssLength
    | `${string} ${string}`
    | `${string} ${string} ${string}`
    | `${string} ${string} ${string} ${string}`
    | 'auto'
  >
  marginInline?: RespValue<TShirtSize | CssLength | 'auto'>
  marginBlock?: RespValue<TShirtSize | CssLength | 'auto'>
  marginTop?: RespValue<TShirtSize | CssLength | 'auto'>
  marginRight?: RespValue<TShirtSize | CssLength | 'auto'>
  marginBottom?: RespValue<TShirtSize | CssLength | 'auto'>
  marginLeft?: RespValue<TShirtSize | CssLength | 'auto'>
}

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & BoxOwnProps
