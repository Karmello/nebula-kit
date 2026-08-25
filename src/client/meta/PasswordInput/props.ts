import {
  DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
  DEFAULT_PASSWORD_INPUT_SCALE,
} from 'lib/components/pro/PasswordInput/constants'
import { PasswordInputProps } from 'lib/index.pro'
import type { Prop } from 'client/definitions'

import { INPUT_META } from '../Input'

export const PASSWORD_PROPS: Record<keyof PasswordInputProps, Prop> = {
  autoComplete: {
    ...INPUT_META.props.autoComplete,
    defaultValue: DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
  },
  color: INPUT_META.props.color,
  defaultValue: INPUT_META.props.defaultValue,
  disabled: INPUT_META.props.disabled,
  intent: INPUT_META.props.intent,
  maxLength: INPUT_META.props.maxLength,
  onBlur: INPUT_META.props.onBlur,
  onChange: INPUT_META.props.onChange,
  onFocus: INPUT_META.props.onFocus,
  placeholder: INPUT_META.props.placeholder,
  readOnly: INPUT_META.props.readOnly,
  scale: {
    ...INPUT_META.props.scale,
    defaultValue: DEFAULT_PASSWORD_INPUT_SCALE,
  },
  tagAttrs: INPUT_META.props.tagAttrs,
  tagRef: INPUT_META.props.tagRef,
  value: INPUT_META.props.value,
  variant: INPUT_META.props.variant,
}
