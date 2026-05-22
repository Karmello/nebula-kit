import { useState } from 'react'

import { Button, Input } from 'lib/components'

import { DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE, PasswordInputProps } from './definitions'

export const PasswordInput = ({
  // Input
  tagAttrs,
  tagRef,
  color,
  defaultValue,
  disabled,
  intent,
  maxLength,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readOnly,
  autoComplete = DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
  size,
  value,
  variant,
}: PasswordInputProps) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true)

  return (
    <Input
      tagAttrs={{
        ...tagAttrs,
        type: hidePassword ? 'password' : 'text',
        autoComplete,
      }}
      tagRef={tagRef}
      endAffix={props => (
        <Button
          {...props}
          tagAttrs={{
            onClick: () => setHidePassword(!hidePassword),
          }}
          iconName={hidePassword ? 'eye-off' : 'eye'}
        />
      )}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      intent={intent}
      maxLength={maxLength}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      readOnly={readOnly}
      autoComplete={autoComplete}
      size={size}
      value={value}
      variant={variant}
    />
  )
}

PasswordInput.displayName = 'PasswordInput'
