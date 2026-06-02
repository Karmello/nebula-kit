import { InputHTMLAttributes, ReactNode } from 'react'

import { ControlSize } from 'lib/types'

import { type BoxProps } from '../Box/types'

export const DEFAULT_INPUT_VARIANT: InputProps['variant'] = 'solid'
export const DEFAULT_INPUT_INTENT: InputProps['intent'] = 'tertiary'

export type InputAffixProps = Pick<InputProps, 'color' | 'disabled' | 'intent' | 'size' | 'variant'>

type InputOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  size?: ControlSize
  startAffix?: (props: InputAffixProps) => ReactNode
  endAffix?: (props: InputAffixProps) => ReactNode
  placeholder?: string
  readOnly?: boolean
  maxLength?: number
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete']
}

type PropsFromBox = Pick<BoxProps<'input'>, 'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled'>

export type InputProps = PropsFromBox & InputOwnProps
