import type { CssFlexDirection } from 'lib/types'

import type { SurfaceGroupProps } from './types'

export const CORNERS_AT_START: Record<CssFlexDirection, string[]> = {
  row: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  column: ['borderTopLeftRadius', 'borderTopRightRadius'],
  'row-reverse': ['borderTopRightRadius', 'borderBottomRightRadius'],
  'column-reverse': ['borderBottomLeftRadius', 'borderBottomRightRadius'],
}

export const CORNERS_AT_END: Record<CssFlexDirection, string[]> = {
  row: ['borderTopRightRadius', 'borderBottomRightRadius'],
  column: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  'row-reverse': ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  'column-reverse': ['borderTopLeftRadius', 'borderTopRightRadius'],
}

export const BORDER_WIDTH_AT_START: Record<CssFlexDirection, string> = {
  row: 'borderLeftWidth',
  column: 'borderTopWidth',
  'row-reverse': 'borderRightWidth',
  'column-reverse': 'borderBottomWidth',
}

export const DEFAULT_SURFACE_GROUP_DISPLAY: SurfaceGroupProps['display'] = 'inline-flex'
export const DEFAULT_SURFACE_GROUP_FLEX_DIRECTION: SurfaceGroupProps['flexDirection'] = 'row'
