import {
  CSS_CURSOR,
  CSS_DISPLAY,
  CSS_FLEX_ALIGN_CONTENT,
  CSS_FLEX_ALIGN_ITEMS,
  CSS_FLEX_DIRECTION,
  CSS_FLEX_ITEM_ALIGN_SELF,
  CSS_FLEX_JUSTIFY_CONTENT,
  CSS_FLEX_WRAP,
  CSS_GRID_AUTO_FLOW,
  CSS_GRID_DISPLAY,
  CSS_GRID_ITEM_ALIGN_SELF,
  CSS_GRID_ITEM_JUSTIFY_SELF,
  CSS_GRID_PLACE_CONTENT,
  CSS_GRID_PLACE_ITEMS,
  CSS_OVERFLOW,
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
export type CssFlexJustifyContent = (typeof CSS_FLEX_JUSTIFY_CONTENT)[number]
export type CssFlexAlignItems = (typeof CSS_FLEX_ALIGN_ITEMS)[number]
export type CssFlexAlignContent = (typeof CSS_FLEX_ALIGN_CONTENT)[number]
export type CssFlexItemAlignSelf = (typeof CSS_FLEX_ITEM_ALIGN_SELF)[number]

export type CssGridDisplay = (typeof CSS_GRID_DISPLAY)[number]
export type CssGridAutoFlow = (typeof CSS_GRID_AUTO_FLOW)[number]
export type CssGridPlaceItems = (typeof CSS_GRID_PLACE_ITEMS)[number]
export type CssGridPlaceContent = (typeof CSS_GRID_PLACE_CONTENT)[number]
export type CssGridItemJustifySelf = (typeof CSS_GRID_ITEM_JUSTIFY_SELF)[number]
export type CssGridItemAlignSelf = (typeof CSS_GRID_ITEM_ALIGN_SELF)[number]
