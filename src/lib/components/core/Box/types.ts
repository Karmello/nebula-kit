import { ElementType } from 'react'

import type {
  CssAlignContent,
  CssAlignItems,
  CssAlignSelf,
  CssCursor,
  CssDisplay,
  CssFlexDirection,
  CssFlexWrap,
  CssGridAutoFlow,
  CssJustifyContent,
  CssJustifySelf,
  CssOverflow,
  CssPlaceContent,
  CssPlaceItems,
  CssPointerEvents,
  CssPosition,
  CssTextAlign,
  CssVisibility,
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
  // flex
  flexDirection?: RespValue<CssFlexDirection>
  flexWrap?: RespValue<CssFlexWrap>
  justifyContent?: RespValue<CssJustifyContent>
  alignItems?: RespValue<CssAlignItems>
  alignContent?: RespValue<CssAlignContent>
  gap?: RespValue<string>
  rowGap?: RespValue<string>
  columnGap?: RespValue<string>
  flex?: RespValue<string>
  flexGrow?: RespValue<string>
  flexShrink?: RespValue<string>
  flexBasis?: RespValue<string>
  alignSelf?: RespValue<CssAlignSelf>
  order?: RespValue<string>
  // grid
  gridTemplateColumns?: RespValue<string>
  gridTemplateRows?: RespValue<string>
  gridAutoRows?: RespValue<string>
  gridAutoColumns?: RespValue<string>
  gridAutoFlow?: RespValue<CssGridAutoFlow>
  placeItems?: RespValue<CssPlaceItems>
  placeContent?: RespValue<CssPlaceContent>
  // grid item
  gridColumn?: RespValue<string>
  gridRow?: RespValue<string>
  justifySelf?: RespValue<CssJustifySelf>
}
