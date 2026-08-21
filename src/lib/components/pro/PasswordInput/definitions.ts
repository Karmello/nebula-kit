import { InputProps } from 'lib/index.core'

export const DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE: PasswordInputProps['autoComplete'] =
  'current-password'

type PropsFromInput = Pick<
  InputProps,
  | 'autoComplete'
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
  | 'scale'
  | 'tagAttrs'
  | 'tagRef'
  | 'value'
  | 'variant'
>

export type PasswordInputProps = PropsFromInput
