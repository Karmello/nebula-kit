// constants

export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'

export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl'] as const
export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

export const COLORS = [
  'gray',
  'blue',
  'teal',
  'cyan',
  'purple',
  'magenta',
  'pink',
  'red',
  'brown',
  'olive',
  'green',
  'yellow',
  'amber',
] as const

export const SCALE = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
  83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
  108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
  129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
  150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
] as const

export const ICON_NAMES = [
  'arrow-left',
  'arrow-right',
  'blend',
  'blocks',
  'book-open-text',
  'box',
  'check',
  'check-circle',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle-alert',
  'circle-user',
  'close',
  'component',
  'copy',
  'copy-check',
  'credit-card',
  'external-link',
  'eye',
  'eye-off',
  'globe',
  'info',
  'key-round',
  'layers',
  'leaf',
  'link',
  'list-chevrons-down-up',
  'list-chevrons-up-down',
  'lock-keyhole',
  'log-in',
  'mail',
  'menu',
  'message-circle-question-mark',
  'orbit',
  'package',
  'panel-left-open',
  'panel-right-open',
  'plug',
  'receipt',
  'screen-share',
  'search',
  'settings',
  'shapes',
  'star',
  'tree-pine',
  'triangle-alert',
  'user',
  'users',
  'user-plus',
  'zap',
] as const

// types

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type Sizes = (typeof SIZES)[number]
export type Color = (typeof COLORS)[number]
export type IconName = (typeof ICON_NAMES)[number]
