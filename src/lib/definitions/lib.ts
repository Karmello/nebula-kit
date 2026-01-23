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

export const ICON_NAMES = [
  'arrow-left',
  'arrow-right',
  'blend',
  'blocks',
  'book-open-text',
  'box',
  'boxes',
  'check',
  'check-circle',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevrons-down',
  'chevrons-left',
  'chevrons-right',
  'chevrons-up',
  'circle-alert',
  'circle-user',
  'close',
  'component',
  'copy',
  'copy-check',
  'credit-card',
  'ellipsis',
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
  'search-x',
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
export type IconName = (typeof ICON_NAMES)[number]
