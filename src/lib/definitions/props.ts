import { Breakpoint, BREAKPOINTS } from 'lib/definitions'

// constants
export const Theme = ['light', 'dark'] as const
export const SwitchAt = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const

// types
export type RespValue<T> = T | Partial<Record<Breakpoint, T>>
export type Theme = (typeof Theme)[number]
export type SwitchAt = (typeof SwitchAt)[number]

// defaults
export const DEFAULT_SWITCH_AT: SwitchAt = 'lg'
