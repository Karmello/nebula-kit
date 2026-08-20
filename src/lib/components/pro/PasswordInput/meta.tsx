import { INPUT_META } from 'lib/components/core/Input/meta'
import { PasswordInputProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE } from './definitions'
import { PASSWORD_INPUT_EXAMPLES } from './examples'

export const PASSWORD_META = {
  PasswordInput: {
    overview: {
      bundle: 'pro',
      title: 'Secure text input with built-in password visibility toggle.',
      description:
        'Handles password entry with optional reveal functionality for improving usability during authentication flows.',
      features: [
        'built-in password visibility toggle',
        'preserves native password input semantics',
        'supports both controlled and uncontrolled modes',
      ],
      composedOf: ['Input', 'IconButton'],
      exposedTags: ['input'],
    },
    props: {
      autoComplete: {
        ...INPUT_META.Input.props.autoComplete,
        defaultValue: DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
      },
      color: INPUT_META.Input.props.color,
      defaultValue: INPUT_META.Input.props.defaultValue,
      disabled: INPUT_META.Input.props.disabled,
      intent: INPUT_META.Input.props.intent,
      maxLength: INPUT_META.Input.props.maxLength,
      onBlur: INPUT_META.Input.props.onBlur,
      onChange: INPUT_META.Input.props.onChange,
      onFocus: INPUT_META.Input.props.onFocus,
      placeholder: INPUT_META.Input.props.placeholder,
      readOnly: INPUT_META.Input.props.readOnly,
      scale: INPUT_META.Input.props.scale,
      tagAttrs: INPUT_META.Input.props.tagAttrs,
      tagRef: INPUT_META.Input.props.tagRef,
      value: INPUT_META.Input.props.value,
      variant: INPUT_META.Input.props.variant,
    },
    examples: PASSWORD_INPUT_EXAMPLES,
    changelog: {
      '0.10.0': ['released'],
    },
  } satisfies ComponentMeta<PasswordInputProps>,
}
