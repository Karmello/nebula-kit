// constants

export const CssTextAlign = ['start', 'center', 'end', 'justify'] as const
export const CssDisplay = ['block', 'inline', 'inline-block', 'flow-root', 'contents', 'none'] as const
export const CssOverflow = ['visible', 'scroll', 'hidden', 'clip', 'auto'] as const
export const CssPosition = ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const
export const CssFlexDirection = ['row', 'row-reverse', 'column', 'column-reverse'] as const
export const CssFlexWrap = ['nowrap', 'wrap', 'wrap-reverse'] as const

export const CssFlexJustifyContent = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
] as const

export const CssFlexAlignItems = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] as const

export const CssFlexItemAlignSelf = [
  'auto',
  'flex-start',
  'flex-end',
  'center',
  'stretch',
  'baseline',
] as const

export const CssGridAutoFlow = ['row', 'column', 'dense', 'row dense', 'column dense'] as const
export const CssGridPlaceItems = ['stretch', 'start', 'center', 'end'] as const

export const CssGridPlaceContent = [
  'start',
  'center',
  'end',
  'stretch',
  'space-between',
  'space-around',
  'space-evenly',
] as const

// types

export type CssDisplay = (typeof CssDisplay)[number]
export type CssOverflow = (typeof CssOverflow)[number]
export type CssPosition = (typeof CssPosition)[number]
export type CssTextAlign = (typeof CssTextAlign)[number]

export type CssFlexDirection = (typeof CssFlexDirection)[number]
export type CssFlexWrap = (typeof CssFlexWrap)[number]
export type CssFlexJustifyContent = (typeof CssFlexJustifyContent)[number]
export type CssFlexAlignItems = (typeof CssFlexAlignItems)[number]
export type CssFlexItemAlignSelf = (typeof CssFlexItemAlignSelf)[number]

export type CssGridAutoFlow = (typeof CssGridAutoFlow)[number]
export type CssGridPlaceItems = (typeof CssGridPlaceItems)[number]
export type CssGridPlaceContent = (typeof CssGridPlaceItems)[number]
