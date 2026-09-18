import { BoxProps } from 'lib/components/core/Box'
import { TShirtSize } from 'lib/types'

import { SWITCH_INTENTS } from './constants'

export type SwitchIntent = (typeof SWITCH_INTENTS)[number]

export type SwitchProps = {
  // Box
  elemRef?: BoxProps['elemRef']
  elemAttrs?: BoxProps['elemAttrs']
  disabled?: BoxProps['disabled']
  color?: BoxProps['color']
  // own
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  scale?: TShirtSize
  intent?: SwitchIntent
}
