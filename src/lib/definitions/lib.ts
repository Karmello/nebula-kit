// constants

export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'

export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl'] as const
export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

export const COLORS = ['gray', 'blue', 'green', 'red', 'yellow', 'amber', 'pink', 'teal', 'purple'] as const

export const ICON_NAMES = [
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'atom',
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
  'code',
  'component',
  'copy',
  'copy-check',
  'credit-card',
  'ellipsis',
  'external-link',
  'eye',
  'eye-off',
  'file-code',
  'film',
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
  'newspaper',
  'orbit',
  'package',
  'paintbrush',
  'panel-left-open',
  'panel-right-open',
  'panel-top-bottom-dashed',
  'plug',
  'puzzle',
  'receipt',
  'rectangle-circle',
  'rss',
  'screen-share',
  'search',
  'search-x',
  'settings',
  'shapes',
  'share-2',
  'shield-check',
  'square-menu',
  'star',
  'tablet-smartphone',
  'text-select',
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
