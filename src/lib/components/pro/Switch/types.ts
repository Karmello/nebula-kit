import { BoxProps } from 'lib/components/core/Box'
import { TShirtSize } from 'lib/types'

import { SWITCH_INTENTS } from './constants'

export type SwitchIntent = (typeof SWITCH_INTENTS)[number]

export type SwitchProps = {
  // own
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  scale?: TShirtSize
  // Box
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  disabled?: BoxProps['disabled']
  color?: BoxProps['color']
  intent?: SwitchIntent
}
