import { ElementType } from 'react'

import { CssDisplay, CssOverflow, CssPosition, CssTextAlign, RespValue, ScaleValue } from 'lib/definitions'
import { HtmlTagProps } from 'lib/components'

export const BoxVariant = ['solid', 'outline', 'ghost'] as const

export const BoxIntent = [
  'neutral',
  'muted',
  'tertiary',
  'secondary',
  'primary',
  'inverse',
  'highlight',
  'success',
  'info',
  'warning',
  'danger',
] as const

export const DEFAULT_BOX_VARIANT: BoxVariant = 'ghost'

export type BoxVariant = (typeof BoxVariant)[number]
export type BoxIntent = (typeof BoxIntent)[number]

type BoxOwnProps = {
  variant?: RespValue<BoxVariant>
  intent?: RespValue<BoxIntent>
  borderIntent?: RespValue<BoxIntent>
  opacity?: RespValue<number>
  borderWidth?: ScaleValue | string
  borderTopWidth?: ScaleValue | string
  borderRightWidth?: ScaleValue | string
  borderBottomWidth?: ScaleValue | string
  borderLeftWidth?: ScaleValue | string
  borderRadius?: RespValue<ScaleValue | string>
  borderTopLeftRadius?: RespValue<ScaleValue | string>
  borderTopRightRadius?: RespValue<ScaleValue | string>
  borderBottomRightRadius?: RespValue<ScaleValue | string>
  borderBottomLeftRadius?: RespValue<ScaleValue | string>
  interactive?: boolean
  disabled?: boolean
  display?: RespValue<CssDisplay>
  overflowX?: RespValue<CssOverflow>
  overflowY?: RespValue<CssOverflow>
  position?: RespValue<CssPosition>
  top?: RespValue<ScaleValue | string>
  right?: RespValue<ScaleValue | string>
  bottom?: RespValue<ScaleValue | string>
  left?: RespValue<ScaleValue | string>
  textAlign?: RespValue<CssTextAlign>
  blockSize?: RespValue<ScaleValue | string>
  minBlockSize?: RespValue<ScaleValue | string>
  maxBlockSize?: RespValue<ScaleValue | string>
  inlineSize?: RespValue<ScaleValue | string>
  minInlineSize?: RespValue<ScaleValue | string>
  maxInlineSize?: RespValue<ScaleValue | string>
  margin?: RespValue<ScaleValue | string>
  marginInline?: RespValue<ScaleValue | string>
  marginBlock?: RespValue<ScaleValue | string>
  marginTop?: RespValue<ScaleValue | string>
  marginRight?: RespValue<ScaleValue | string>
  marginBottom?: RespValue<ScaleValue | string>
  marginLeft?: RespValue<ScaleValue | string>
  padding?: RespValue<ScaleValue | string>
  paddingInline?: RespValue<ScaleValue | string>
  paddingBlock?: RespValue<ScaleValue | string>
  paddingTop?: RespValue<ScaleValue | string>
  paddingRight?: RespValue<ScaleValue | string>
  paddingBottom?: RespValue<ScaleValue | string>
  paddingLeft?: RespValue<ScaleValue | string>
  zIndex?: number
}

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & BoxOwnProps
