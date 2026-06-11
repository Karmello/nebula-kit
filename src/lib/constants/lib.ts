import type { SwitchBreakpoint } from 'lib/types'

export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'

export const DEFAULT_SWITCH_BREAKPOINT: SwitchBreakpoint = 'lg'
export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export const SWITCH_BREAKPOINTS = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const
