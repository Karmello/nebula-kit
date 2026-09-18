import { BREAKPOINTS, SWITCH_BREAKPOINTS } from '../constants'

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type SwitchBreakpoint = (typeof SWITCH_BREAKPOINTS)[number]
export type RespValue<T> = T | Partial<Record<Breakpoint, T>>
