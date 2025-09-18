import { Breakpoint, BREAKPOINTS, ScaleValue } from 'lib/definitions'

// constants

export const Theme = ['light', 'gray', 'dark'] as const
export const BoxVariant = ['solid', 'outline', 'ghost'] as const

export const BoxIntent = [
  'neutral',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'danger',
  'inverse',
] as const

export const TextTypography = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'lead',
  'body',
  'secondary',
  'caption',
] as const

export const IconPosition = ['left', 'right'] as const
export const ButtonSize = ['xs', 'sm', 'md', 'lg'] as const
export const HorizontalPosition = ['left', 'center', 'right'] as const
export const SplitViewSwitchAt = [...BREAKPOINTS.filter(bp => bp !== 'base')] as const
export const CalloutVariant = ['solid', 'outline'] as const
export const CalloutIntent = ['info', 'success', 'warning', 'danger'] as const
export const MarkerListStyle = ['disc', 'circle', 'square', 'decimal'] as const

// types
export type Theme = (typeof Theme)[number]
export type BoxVariant = (typeof BoxVariant)[number]
export type BoxIntent = (typeof BoxIntent)[number]
export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>
export type TextTypography = (typeof TextTypography)[number]
export type ButtonSize = (typeof ButtonSize)[number]
export type HorizontalPosition = (typeof HorizontalPosition)[number]
export type IconPosition = (typeof IconPosition)[number]
export type SplitViewSwitchAt = (typeof SplitViewSwitchAt)[number]
export type CalloutVariant = (typeof CalloutVariant)[number]
export type CalloutIntent = (typeof CalloutIntent)[number]
export type MarkerListStyle = (typeof MarkerListStyle)[number]

export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

// defaults
export const DEFAULT_THEME: Theme = 'light'
export const DEFAULT_BORDER_RADIUS: ScaleValue = 0

export const DEFAULT_BOX_VARIANT: BoxVariant = 'ghost'
export const DEFAULT_BOX_INTENT: BoxIntent = 'neutral'

export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'

export const DEFAULT_BUTTON_VARIANT: BoxVariant = 'solid'
export const DEFAULT_BUTTON_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_BUTTON_SIZE: ButtonSize = 'md'

export const DEFAULT_SVG_ICON_SIZE = 8
export const DEFAULT_WITH_ICON_ICON_POSITION: IconPosition = 'left'

export const DEFAULT_SPLIT_VIEW_SIDE_WIDTH = '225px'
export const DEFAULT_SPLIT_VIEW_SWITCH_AT: SplitViewSwitchAt = 'lg'

export const DEFAULT_CALLOUT_VARIANT: CalloutVariant = 'solid'
export const DEFAULT_CALLOUT_INTENT: CalloutIntent = 'info'

export const DEFAULT_DIVIDER_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_DIVIDER_THICKNESS = 1

export const DEFAULT_SPACER_BLOCK_SIZE = 2
