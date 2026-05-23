import { InputProps } from 'lib/components'

export const DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE: PasswordInputProps['autoComplete'] = 'current-password'

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
  | 'size'
  | 'tagAttrs'
  | 'tagRef'
  | 'value'
  | 'variant'
>

export type PasswordInputProps = PropsFromInput
