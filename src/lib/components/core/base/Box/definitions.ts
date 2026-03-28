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
  Theme,
} from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

export const BOX_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const
export const BOX_INTENTS = ['neutral', 'muted', 'tertiary', 'secondary', 'primary', 'strong', 'inverse'] as const
export const BOX_BORDER_WIDTH = '2px'

export type BoxVariant = (typeof BOX_VARIANTS)[number]
export type BoxIntent = (typeof BOX_INTENTS)[number]
export type BoxColor = (typeof COLORS)[number]

type BoxOwnProps = {
  // surface
  drawable?: boolean
  elevated?: boolean
  theme?: RespValue<Theme>
  brand?: RespValue<BoxColor>
  color?: RespValue<BoxColor>
  variant?: RespValue<BoxVariant>
  intent?: RespValue<BoxIntent>
  // interaction
  interactive?: boolean
  disabled?: boolean
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
  blockSize?: RespValue<string>
  minBlockSize?: RespValue<string>
  maxBlockSize?: RespValue<string>
  inlineSize?: RespValue<string>
  minInlineSize?: RespValue<string>
  maxInlineSize?: RespValue<string>
  // padding
  padding?: RespValue<string>
  paddingInline?: RespValue<string>
  paddingBlock?: RespValue<string>
  paddingTop?: RespValue<string>
  paddingRight?: RespValue<string>
  paddingBottom?: RespValue<string>
  paddingLeft?: RespValue<string>
  // margin
  margin?: RespValue<string>
  marginInline?: RespValue<string>
  marginBlock?: RespValue<string>
  marginTop?: RespValue<string>
  marginRight?: RespValue<string>
  marginBottom?: RespValue<string>
  marginLeft?: RespValue<string>
}

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & BoxOwnProps
