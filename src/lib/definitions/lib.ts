// constants

export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'

export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export const SWITCH_AT = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const

export const THEMES = ['light', 'dark'] as const
export const COLORS = ['gray', 'green', 'blue', 'red', 'pink', 'amber'] as const
export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export const SPACINGS = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

export const DEFAULT_SWITCH_AT: SwitchAt = 'lg'

export const SPACING_VALUES: Record<Spacings, string> = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '48px',
  xl: '72px',
  xxl: '96px',
}

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
  'circle-x',
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
  'keyboard',
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
  'send',
  'send-horizontal',
  'settings',
  'shapes',
  'share-2',
  'shield-check',
  'sparkles',
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
export type Theme = (typeof THEMES)[number]
export type Sizes = (typeof SIZES)[number]
export type Spacings = (typeof SPACINGS)[number]
export type IconName = (typeof ICON_NAMES)[number]

export type SwitchAt = (typeof SWITCH_AT)[number]
export type RespValue<T> = T | Partial<Record<Breakpoint, T>>
export type SpacingValue = Spacings | (string & {})
