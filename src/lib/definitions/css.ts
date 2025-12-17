// constants

export const CSS_FLEX_DISPLAY = ['flex', 'inline-flex'] as const
export const CSS_FLEX_DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse'] as const
export const CSS_FLEX_WRAP = ['nowrap', 'wrap', 'wrap-reverse'] as const

export const CSS_FLEX_JUSTIFY_CONTENT = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
] as const

export const CSS_FLEX_ALIGN_ITEMS = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] as const

export const CSS_FLEX_ITEM_ALIGN_SELF = [
  'auto',
  'flex-start',
  'flex-end',
  'center',
  'stretch',
  'baseline',
] as const

export const CSS_GRID_AUTO_FLOW = ['row', 'column', 'dense', 'row dense', 'column dense'] as const
export const CSS_GRID_PLACE_ITEMS = ['stretch', 'start', 'center', 'end'] as const

export const CSS_GRID_PLACE_CONTENT = [
  'start',
  'center',
  'end',
  'stretch',
  'space-between',
  'space-around',
  'space-evenly',
] as const

export const CSS_GRID_ITEM_JUSTIFY_SELF = ['auto', 'start', 'center', 'end', 'stretch'] as const
export const CSS_GRID_ITEM_ALIGN_SELF = ['auto', 'start', 'center', 'end', 'stretch'] as const

// types

export type CssFlexDisplay = (typeof CSS_FLEX_DISPLAY)[number]
export type CssFlexDirection = (typeof CSS_FLEX_DIRECTION)[number]
export type CssFlexWrap = (typeof CSS_FLEX_WRAP)[number]
export type CssFlexJustifyContent = (typeof CSS_FLEX_JUSTIFY_CONTENT)[number]
export type CssFlexAlignItems = (typeof CSS_FLEX_ALIGN_ITEMS)[number]
export type CssFlexItemAlignSelf = (typeof CSS_FLEX_ITEM_ALIGN_SELF)[number]

export type CssGridAutoFlow = (typeof CSS_GRID_AUTO_FLOW)[number]
export type CssGridPlaceItems = (typeof CSS_GRID_PLACE_ITEMS)[number]
export type CssGridPlaceContent = (typeof CSS_GRID_PLACE_CONTENT)[number]
export type CssGridItemJustifySelf = (typeof CSS_GRID_ITEM_JUSTIFY_SELF)[number]
export type CssGridItemAlignSelf = (typeof CSS_GRID_ITEM_ALIGN_SELF)[number]
