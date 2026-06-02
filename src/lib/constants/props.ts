import type { ControlSize, SwitchAt, TShirtSize } from 'lib/types'

export const DEFAULT_CONTROL_SIZE: ControlSize = 'md'
export const DEFAULT_SWITCH_AT: SwitchAt = 'lg'

export const TSHIRT_SIZES = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const
export const CONTROL_SIZES = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const satisfies TShirtSize[]

export const THEMES = ['light', 'dark'] as const
export const SATURATIONS = ['soft', 'vivid'] as const
export const COLORS = ['gray', 'green', 'blue', 'red', 'pink', 'amber'] as const
export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

export const SWITCH_AT = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const
