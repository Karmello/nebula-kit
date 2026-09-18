import { BoxProps } from 'lib/components/core/Box'
import { TShirtSize } from 'lib/types'

import { SWITCH_INTENTS } from './constants'

export type SwitchIntent = (typeof SWITCH_INTENTS)[number]

export type SwitchProps = {
  // Box
  elemRef?: BoxProps<'input'>['elemRef']
  elemAttrs?: BoxProps<'input'>['elemAttrs']
  disabled?: BoxProps['disabled']
  color?: BoxProps['color']
  ripple?: BoxProps['ripple']
  // own
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  scale?: TShirtSize
  intent?: SwitchIntent
}
