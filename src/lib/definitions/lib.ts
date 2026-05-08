import { ICON_NAMES } from './icon-names'

// constants

export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'

export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export const SWITCH_AT = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const

export const THEMES = ['light', 'dark'] as const
export const SATURATIONS = ['soft', 'vivid'] as const
export const COLORS = ['gray', 'green', 'blue', 'red', 'pink', 'amber'] as const

export const DEFAULT_SWITCH_AT: SwitchAt = 'lg'

// types

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type Theme = (typeof THEMES)[number]
export type Saturation = (typeof SATURATIONS)[number]
export type IconName = (typeof ICON_NAMES)[number]

export type SwitchAt = (typeof SWITCH_AT)[number]
export type RespValue<T> = T | Partial<Record<Breakpoint, T>>
