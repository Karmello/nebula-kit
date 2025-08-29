export enum Language {
  DEFAULT = 'en',
  EN = 'en',
  PL = 'pl',
}

export enum Theme {
  DEFAULT = 'light',
  LIGHT = 'light',
  GRAY = 'gray',
  DARK = 'dark',
}

export enum Slot {
  header = 'Header',
  side = 'Side',
  sideMobile = 'SideMobile',
  sideDesktop = 'SideDesktop',
  main = 'Main',
  footer = 'Footer',
}

export enum BoxVariant {
  solid = 'solid',
  outline = 'outline',
  ghost = 'ghost',
}

export enum BoxIntent {
  'neutral' = 'neutral',
  'primary' = 'primary',
  'secondary' = 'secondary',
  'tertiary' = 'tertiary',
  'success' = 'success',
  'info' = 'info',
  'warning' = 'warning',
  'danger' = 'danger',
  'inverse' = 'inverse',
}

export enum CssTextAlign {
  'start' = 'start',
  'center' = 'center',
  'end' = 'end',
  'justify' = 'justify',
}

export enum CssDisplay {
  'block' = 'block',
  'inline' = 'inline',
  'inline-block' = 'inline-block',
  'flow-root' = 'flow-root',
  'contents' = 'contents',
  'none' = 'none',
}

export enum CssOverflow {
  'visible' = 'visible',
  'hidden' = 'hidden',
  'auto' = 'auto',
  'scroll' = 'scroll',
}

export enum CssPosition {
  'static' = 'static',
  'relative' = 'relative',
  'absolute' = 'absolute',
  'fixed' = 'fixed',
  'sticky' = 'sticky',
}
