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

import { type HtmlTagProps } from '../HtmlTag/types'
import {
  BOX_BG_MODE,
  BOX_BG_ROLES,
  BOX_BORDER_MODE,
  BOX_BORDER_ROLES,
  BOX_COLORS,
  BOX_INTENTS,
  BOX_SURFACE_DEPTHS,
  BOX_TEXT,
  BOX_THEMES,
} from './constants'

export type BoxTheme = (typeof BOX_THEMES)[number]
export type BoxIntent = (typeof BOX_INTENTS)[number]
export type BoxColor = (typeof BOX_COLORS)[number]
export type BoxSurfaceDepth = (typeof BOX_SURFACE_DEPTHS)[number]
export type BoxBorderRole = (typeof BOX_BORDER_ROLES)[number]
export type BoxBorderMode = (typeof BOX_BORDER_MODE)[number]
export type BoxBgMode = (typeof BOX_BG_MODE)[number]
export type BoxBgRole = (typeof BOX_BG_ROLES)[number]
export type BoxText = (typeof BOX_TEXT)[number]

export type BoxProps<T extends ElementType = 'div'> = HtmlTagProps<T> & {
  // surface
  theme?: RespValue<BoxTheme>
  brand?: BoxColor
  drawable?: boolean
  color?: BoxColor
  intent?: BoxIntent
  surfaceDepth?: BoxSurfaceDepth
  bgMode?: BoxBgMode
  bgRole?: BoxBgRole
  borderMode?: BoxBorderMode
  borderRole?: BoxBorderRole
  text?: BoxText
  // interaction
  interactive?: boolean
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
  gridColumn?: RespValue<string>
  gridRow?: RespValue<string>
  justifySelf?: RespValue<CssJustifySelf>
}
