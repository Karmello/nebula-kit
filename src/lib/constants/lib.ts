export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'

export const BOX_COLORS = ['gray', 'green', 'blue', 'red', 'pink', 'amber'] as const

export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export const SWITCH_BREAKPOINTS = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const

export const DEFAULT_SWITCH_BREAKPOINT: (typeof SWITCH_BREAKPOINTS)[number] = 'lg'
