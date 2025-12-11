import { ElementType } from 'react'

import { Color, CssDisplay, CssOverflow, CssPosition, CssTextAlign, RespValue } from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

export const BOX_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const
export const BOX_INTENTS = ['neutral', 'muted', 'tertiary', 'secondary', 'primary', 'inverse'] as const
export const BOX_BORDER_WIDTH = '2px'

export type BoxVariant = (typeof BOX_VARIANTS)[number]
export type BoxIntent = (typeof BOX_INTENTS)[number]

type BoxOwnProps = {
  variant?: RespValue<BoxVariant>
  intent?: RespValue<BoxIntent>
  borderIntent?: RespValue<BoxIntent>
  color?: RespValue<Color>
  // state
  interactive?: boolean
  disabled?: boolean
  hoveredByDefault?: boolean
  // css
  opacity?: RespValue<number>
  textAlign?: RespValue<CssTextAlign>
  zIndex?: number
  // border
  borderWidth?: string
  borderTopWidth?: string
  borderRightWidth?: string
  borderBottomWidth?: string
  borderLeftWidth?: string
  // border radius
  borderRadius?: RespValue<string>
  borderTopLeftRadius?: RespValue<string>
  borderTopRightRadius?: RespValue<string>
  borderBottomRightRadius?: RespValue<string>
  borderBottomLeftRadius?: RespValue<string>
  // display
  display?: RespValue<CssDisplay>
  overflowX?: RespValue<CssOverflow>
  overflowY?: RespValue<CssOverflow>
  // position
  position?: RespValue<CssPosition>
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
