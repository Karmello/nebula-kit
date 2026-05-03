import { ICON_NAMES } from './icon-names'

// constants

export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'

export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export const SWITCH_AT = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const

export const THEMES = ['light', 'dark'] as const
export const COLORS = ['gray', 'green', 'blue', 'red', 'pink', 'amber'] as const
export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export const LENGTHS = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

export const DEFAULT_SWITCH_AT: SwitchAt = 'lg'

export const LENGTH_VALUES: Record<Length, string> = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '48px',
  xl: '72px',
  xxl: '96px',
}

// types

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type Theme = (typeof THEMES)[number]
export type Size = (typeof SIZES)[number]
export type Length = (typeof LENGTHS)[number]
export type IconName = (typeof ICON_NAMES)[number]

export type SwitchAt = (typeof SWITCH_AT)[number]
export type RespValue<T> = T | Partial<Record<Breakpoint, T>>
export type LengthValue = Length | (string & {})
