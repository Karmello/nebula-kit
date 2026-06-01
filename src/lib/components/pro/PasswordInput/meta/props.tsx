import { ComponentMeta } from 'client/definitions'

import { type PasswordInputProps, DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE } from '../definitions'
import { INPUT_PROPS_META } from '../../../core/Input/meta/props'

const PASSWORD_INPUT_PROPS_META: ComponentMeta<PasswordInputProps>['props'] = {
  autoComplete: {
    ...INPUT_PROPS_META.autoComplete,
    defaultValue: DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
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
