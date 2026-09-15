import { BoxIntent } from 'lib/components/core/Box'
import type { TShirtSize } from 'lib/types'

export const SWITCH_BORDER_MULTIPLIER = 2

export const SWITCH_INTENTS = [
  'muted',
  'tertiary',
  'secondary',
  'primary',
] as const satisfies BoxIntent[]

export const DEFAULT_SWITCH_SCALE: TShirtSize = 'xs'
export const DEFAULT_SWITCH_INTENT: (typeof SWITCH_INTENTS)[number] = 'tertiary'
