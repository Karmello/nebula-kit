import { InputProps } from 'lib/index.core'

export const DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE: PasswordInputProps['autoComplete'] =
  'current-password'

type PropsFromInput = {
  autoComplete?: InputProps['autoComplete']
  color?: InputProps['color']
  defaultValue?: InputProps['defaultValue']
  disabled?: InputProps['disabled']
  intent?: InputProps['intent']
  maxLength?: InputProps['maxLength']
  onBlur?: InputProps['onBlur']
  onChange?: InputProps['onChange']
  onFocus?: InputProps['onFocus']
  placeholder?: InputProps['placeholder']
  readOnly?: InputProps['readOnly']
  scale?: InputProps['scale']
  tagAttrs?: InputProps['tagAttrs']
  tagRef?: InputProps['tagRef']
  value?: InputProps['value']
  variant?: InputProps['variant']
}

export type PasswordInputProps = PropsFromInput
