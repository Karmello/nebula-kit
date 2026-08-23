import type { TShirtSize } from 'lib/types'

import { BoxProps } from '../Box'
import { CHECKBOX_VARIANTS } from './constants'

export type CheckboxVariant = (typeof CHECKBOX_VARIANTS)[number]

export type CheckboxProps = {
  // own
  variant?: CheckboxVariant
  size?: TShirtSize
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  // Box
  tagAttrs?: BoxProps<'input'>['tagAttrs']
  tagRef?: BoxProps<'input'>['tagRef']
  intent?: BoxProps<'input'>['intent']
  color?: BoxProps<'input'>['color']
  disabled?: BoxProps<'input'>['disabled']
}
