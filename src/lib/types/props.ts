import { BREAKPOINTS, CONTROL_SIZES, ICON_NAMES, SATURATIONS, SWITCH_AT, THEMES, TSHIRT_SIZES } from '../constants'

export type TShirtSize = (typeof TSHIRT_SIZES)[number]
export type ControlSize = (typeof CONTROL_SIZES)[number]

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type Theme = (typeof THEMES)[number]
export type Saturation = (typeof SATURATIONS)[number]
export type IconName = (typeof ICON_NAMES)[number]

export type SwitchAt = (typeof SWITCH_AT)[number]

export type RespValue<T> = T | Partial<Record<Breakpoint, T>>
