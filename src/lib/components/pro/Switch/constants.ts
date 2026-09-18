import { BoxIntent } from 'lib/components/core/Box'
import type { TShirtSize } from 'lib/types'

export const SWITCH_SCALE_MAP: Record<TShirtSize, { gapSize: number }> = {
  xs: { gapSize: 4 },
  sm: { gapSize: 5 },
  md: { gapSize: 6 },
  lg: { gapSize: 7 },
  xl: { gapSize: 8 },
}

export const SWITCH_INTENTS = [
  'muted',
  'tertiary',
  'secondary',
  'primary',
  'strong',
] as const satisfies BoxIntent[]

export const DEFAULT_SWITCH_SCALE: TShirtSize = 'xs'
export const DEFAULT_SWITCH_INTENT: (typeof SWITCH_INTENTS)[number] = 'tertiary'
export const DEFAULT_SWITCH_RIPPLE = false
