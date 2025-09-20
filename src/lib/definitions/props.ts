import { Breakpoint, BREAKPOINTS, ScaleValue } from 'lib/definitions'

// constants
export const Theme = ['light', 'gray', 'dark'] as const
export const SwitchAt = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const

// types
export type RespValue<T> = T | Partial<Record<Breakpoint, T>>
export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
export type Theme = (typeof Theme)[number]
export type SwitchAt = (typeof SwitchAt)[number]

// defaults
export const DEFAULT_THEME: Theme = 'light'
export const DEFAULT_BORDER_RADIUS: ScaleValue = 0
export const DEFAULT_SWITCH_AT: SwitchAt = 'lg'
