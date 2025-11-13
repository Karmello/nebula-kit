import { ElementType } from 'react'

import {
  Color,
  CssDisplay,
  CssOverflow,
  CssPosition,
  CssTextAlign,
  RespValue,
  ScaleValue,
} from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

export const BOX_VARIANTS = ['solid', 'outline', 'ghost'] as const
export const BOX_INTENTS = ['neutral', 'muted', 'tertiary', 'secondary', 'primary', 'inverse'] as const

export const DEFAULT_BOX_VARIANT: BoxVariant = 'ghost'

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
  disableActiveState?: boolean
  activeOnFocus?: boolean
  // css
  opacity?: RespValue<number>
  textAlign?: RespValue<CssTextAlign>
  zIndex?: number
  // border
  borderWidth?: ScaleValue | string
  borderTopWidth?: ScaleValue | string
  borderRightWidth?: ScaleValue | string
  borderBottomWidth?: ScaleValue | string
  borderLeftWidth?: ScaleValue | string
  // border radius
  borderRadius?: RespValue<ScaleValue | string>
  borderTopLeftRadius?: RespValue<ScaleValue | string>
  borderTopRightRadius?: RespValue<ScaleValue | string>
  borderBottomRightRadius?: RespValue<ScaleValue | string>
  borderBottomLeftRadius?: RespValue<ScaleValue | string>
  // display
  display?: RespValue<CssDisplay>
  overflowX?: RespValue<CssOverflow>
  overflowY?: RespValue<CssOverflow>
  // position
  position?: RespValue<CssPosition>
  top?: RespValue<ScaleValue | string>
  right?: RespValue<ScaleValue | string>
  bottom?: RespValue<ScaleValue | string>
  left?: RespValue<ScaleValue | string>
  // size
  blockSize?: RespValue<ScaleValue | string>
  minBlockSize?: RespValue<ScaleValue | string>
  maxBlockSize?: RespValue<ScaleValue | string>
  inlineSize?: RespValue<ScaleValue | string>
  minInlineSize?: RespValue<ScaleValue | string>
  maxInlineSize?: RespValue<ScaleValue | string>
  // padding
  padding?: RespValue<ScaleValue | string>
  paddingInline?: RespValue<ScaleValue | string>
  paddingBlock?: RespValue<ScaleValue | string>
  paddingTop?: RespValue<ScaleValue | string>
  paddingRight?: RespValue<ScaleValue | string>
  paddingBottom?: RespValue<ScaleValue | string>
  paddingLeft?: RespValue<ScaleValue | string>
  // margin
  margin?: RespValue<ScaleValue | string>
  marginInline?: RespValue<ScaleValue | string>
  marginBlock?: RespValue<ScaleValue | string>
  marginTop?: RespValue<ScaleValue | string>
  marginRight?: RespValue<ScaleValue | string>
  marginBottom?: RespValue<ScaleValue | string>
  marginLeft?: RespValue<ScaleValue | string>
}

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & BoxOwnProps
