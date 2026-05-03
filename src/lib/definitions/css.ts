// constants

export const CSS_TEXT_ALIGN = ['left', 'right', 'center', 'justify', 'start', 'end'] as const
export const CSS_POINTER_EVENTS = ['auto', 'none'] as const
export const CSS_DISPLAY = ['block', 'inline', 'inline-block', 'none', 'contents'] as const
export const CSS_OVERFLOW = ['visible', 'hidden', 'clip', 'scroll', 'auto'] as const
export const CSS_POSITION = ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const
export const CSS_VISIBILITY = ['visible', 'hidden'] as const

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

export const CSS_FLEX_ALIGN_CONTENT = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'space-between',
  'space-around',
  'space-evenly',
] as const

export const CSS_FLEX_ITEM_ALIGN_SELF = ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'] as const

export const CSS_GRID_AUTO_FLOW = ['row', 'column', 'row dense', 'column dense'] as const
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

export type CssTextAlign = (typeof CSS_TEXT_ALIGN)[number]
export type CssPointerEvents = (typeof CSS_POINTER_EVENTS)[number]
export type CssDisplay = (typeof CSS_DISPLAY)[number]
export type CssOverflow = (typeof CSS_OVERFLOW)[number]
export type CssPosition = (typeof CSS_POSITION)[number]
export type CssVisibility = (typeof CSS_VISIBILITY)[number]

export type CssFlexDisplay = (typeof CSS_FLEX_DISPLAY)[number]
export type CssFlexDirection = (typeof CSS_FLEX_DIRECTION)[number]
export type CssFlexWrap = (typeof CSS_FLEX_WRAP)[number]
export type CssFlexJustifyContent = (typeof CSS_FLEX_JUSTIFY_CONTENT)[number]
export type CssFlexAlignItems = (typeof CSS_FLEX_ALIGN_ITEMS)[number]
export type CssFlexAlignContent = (typeof CSS_FLEX_ALIGN_CONTENT)[number]
export type CssFlexItemAlignSelf = (typeof CSS_FLEX_ITEM_ALIGN_SELF)[number]

export type CssGridAutoFlow = (typeof CSS_GRID_AUTO_FLOW)[number]
export type CssGridPlaceItems = (typeof CSS_GRID_PLACE_ITEMS)[number]
export type CssGridPlaceContent = (typeof CSS_GRID_PLACE_CONTENT)[number]
export type CssGridItemJustifySelf = (typeof CSS_GRID_ITEM_JUSTIFY_SELF)[number]
export type CssGridItemAlignSelf = (typeof CSS_GRID_ITEM_ALIGN_SELF)[number]

export type CssLength =
  | `${number}px`
  | `${number}rem`
  | `${number}em`
  | `${number}%`
  | `${number}vh`
  | `${number}vw`
  | `${number}dvh`
  | `${number}dvw`
  | `${number}ch`
  | `${number}ex`
  | `calc(${string})`
  | `clamp(${string})`
  | `min(${string})`
  | `max(${string})`
  | 'auto'
