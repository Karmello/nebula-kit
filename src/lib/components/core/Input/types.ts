import { InputHTMLAttributes } from 'react'

import { TShirtSize } from 'lib/types'

import { BoxProps } from '../Box'

export const INPUT_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const
export type InputVariant = (typeof INPUT_VARIANTS)[number]

export type InputProps = {
  // own
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  scale?: TShirtSize
  placeholder?: string
  readOnly?: boolean
  maxLength?: number
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete']
  // Box
  tagAttrs?: BoxProps<'input'>['tagAttrs']
  tagRef?: BoxProps<'input'>['tagRef']
  variant?: InputVariant
  color?: BoxProps<'input'>['color']
  intent?: BoxProps<'input'>['intent']
  disabled?: BoxProps<'input'>['disabled']
}
