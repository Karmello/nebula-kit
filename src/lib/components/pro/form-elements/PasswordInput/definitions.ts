import { InputProps } from 'lib/components'

export const PASSWORD_INPUT_AUTO_COMPLETE = ['current-password', 'new-password', 'off'] as const

export const DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE: PasswordInputProps['autoComplete'] = 'current-password'

export type PasswordInputAutoComplete = (typeof PASSWORD_INPUT_AUTO_COMPLETE)[number]

type PasswordInputOwnProps = {
  autoComplete?: PasswordInputAutoComplete
}

type PropsFromInput = Pick<
  InputProps,
  | 'color'
  | 'defaultValue'
  | 'disabled'
  | 'intent'
  | 'maxLength'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'placeholder'
  | 'readOnly'
  | 'size'
  | 'tagAttrs'
  | 'tagRef'
  | 'value'
  | 'variant'
>

export type PasswordInputProps = PropsFromInput & PasswordInputOwnProps
