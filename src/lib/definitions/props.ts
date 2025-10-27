import { Breakpoint, BREAKPOINTS } from 'lib/definitions'

// constants
export const THEME = ['light', 'dark'] as const
export const SWITCH_AT = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const

// defaults
export const DEFAULT_SWITCH_AT: SwitchAt = 'lg'

// types
export type RespValue<T> = T | Partial<Record<Breakpoint, T>>
export type Theme = (typeof THEME)[number]
export type SwitchAt = (typeof SWITCH_AT)[number]
