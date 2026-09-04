import {
  CSS_ALIGN_CONTENT,
  CSS_ALIGN_ITEMS,
  CSS_ALIGN_SELF,
  CSS_CURSOR,
  CSS_DISPLAY,
  CSS_FLEX_DIRECTION,
  CSS_FLEX_WRAP,
  CSS_GRID_AUTO_FLOW,
  CSS_JUSTIFY_CONTENT,
  CSS_JUSTIFY_SELF,
  CSS_OVERFLOW,
  CSS_PLACE_CONTENT,
  CSS_PLACE_ITEMS,
  CSS_POINTER_EVENTS,
  CSS_POSITION,
  CSS_TEXT_ALIGN,
  CSS_VISIBILITY,
} from '../constants'

export type CssTextAlign = (typeof CSS_TEXT_ALIGN)[number]
export type CssPointerEvents = (typeof CSS_POINTER_EVENTS)[number]
export type CssDisplay = (typeof CSS_DISPLAY)[number]
export type CssOverflow = (typeof CSS_OVERFLOW)[number]
export type CssPosition = (typeof CSS_POSITION)[number]
export type CssVisibility = (typeof CSS_VISIBILITY)[number]
export type CssCursor = (typeof CSS_CURSOR)[number]

export type CssFlexDirection = (typeof CSS_FLEX_DIRECTION)[number]
export type CssFlexWrap = (typeof CSS_FLEX_WRAP)[number]
export type CssJustifyContent = (typeof CSS_JUSTIFY_CONTENT)[number]
export type CssAlignItems = (typeof CSS_ALIGN_ITEMS)[number]
export type CssAlignContent = (typeof CSS_ALIGN_CONTENT)[number]
export type CssAlignSelf = (typeof CSS_ALIGN_SELF)[number]

export type CssGridAutoFlow = (typeof CSS_GRID_AUTO_FLOW)[number]
export type CssPlaceItems = (typeof CSS_PLACE_ITEMS)[number]
export type CssPlaceContent = (typeof CSS_PLACE_CONTENT)[number]
export type CssJustifySelf = (typeof CSS_JUSTIFY_SELF)[number]
