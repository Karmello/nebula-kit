import { BoxIntent } from 'lib/components/core/Box'
import { SwitchProps } from 'lib/index.pro'

export const SWITCH_BORDER_MULTIPLIER = 2

export const DEFAULT_SWITCH_SCALE: SwitchProps['scale'] = 'xs'
export const DEFAULT_SWITCH_INTENT: SwitchProps['intent'] = 'tertiary'

export const SWITCH_INTENTS = [
  'muted',
  'tertiary',
  'secondary',
  'primary',
] as const satisfies BoxIntent[]
