// constants

export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'

export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl'] as const
export const COLORS = ['gray', 'red', 'green', 'blue', 'amber'] as const

export const SCALE = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
] as const

export const ICON_NAMES = [
  'arrow-left',
  'arrow-right',
  'blend',
  'box',
  'check',
  'check-circle',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle-alert',
  'close',
  'copy',
  'copy-check',
  'external-link',
  'info',
  'list-chevrons-down-up',
  'list-chevrons-up-down',
  'menu',
  'orbit',
  'panel-left-open',
  'panel-right-open',
  'search',
  'tree-pine',
  'triangle-alert',
] as const

// types

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type Color = (typeof COLORS)[number]
export type ScaleValue = (typeof SCALE)[number]
export type IconName = (typeof ICON_NAMES)[number]
