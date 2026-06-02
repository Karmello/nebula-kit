import { INPUT_META } from 'lib/components/core/Input/meta'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE, type PasswordInputProps } from './definitions'
import { PasswordInput } from './password-input'

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
      topLevelTags: ['input'],
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
      size: INPUT_META.Input.props.size,
      tagAttrs: INPUT_META.Input.props.tagAttrs,
      tagRef: INPUT_META.Input.props.tagRef,
      value: INPUT_META.Input.props.value,
      variant: INPUT_META.Input.props.variant,
    },
    examples: [
      {
        description: 'Basic PasswordInput.',
        jsx: <PasswordInput />,
      },
    ],
    changelog: {
      '0.10.0': ['released'],
    },
  } as ComponentMeta<PasswordInputProps>,
}
