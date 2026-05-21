import { ComponentMeta } from 'client/definitions'
import { PasswordInputProps } from 'lib/components'

import {
  DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
  PASSWORD_INPUT_AUTO_COMPLETE,
} from 'lib/components/pro/form-elements/PasswordInput/definitions'

import { INPUT_PROPS_META } from '../Input/props'

const PASSWORD_INPUT_PROPS_META: ComponentMeta<PasswordInputProps>['props'] = {
  autoComplete: {
    options: PASSWORD_INPUT_AUTO_COMPLETE,
    defaultValue: DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
    description: 'Controls the browser autocomplete behavior for password-related input fields.',
  },
  color: INPUT_PROPS_META.color,
  defaultValue: INPUT_PROPS_META.defaultValue,
  disabled: INPUT_PROPS_META.disabled,
  intent: INPUT_PROPS_META.intent,
  maxLength: INPUT_PROPS_META.maxLength,
  onBlur: INPUT_PROPS_META.onBlur,
  onChange: INPUT_PROPS_META.onChange,
  onFocus: INPUT_PROPS_META.onFocus,
  placeholder: INPUT_PROPS_META.placeholder,
  readOnly: INPUT_PROPS_META.readOnly,
  size: INPUT_PROPS_META.size,
  tagAttrs: INPUT_PROPS_META.tagAttrs,
  tagRef: INPUT_PROPS_META.tagRef,
  value: INPUT_PROPS_META.value,
  variant: INPUT_PROPS_META.variant,
}

export { PASSWORD_INPUT_PROPS_META }
