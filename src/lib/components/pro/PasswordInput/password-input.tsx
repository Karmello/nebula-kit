import { useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { IconButton } from 'lib/components/core/IconButton'
import { Input } from 'lib/components/core/Input'

import { DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE, DEFAULT_PASSWORD_INPUT_SCALE } from './constants'
import { PasswordInputProps } from './types'

export const PasswordInput = ({
  // Input
  elemAttrs,
  elemRef,
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
  scale = DEFAULT_PASSWORD_INPUT_SCALE,
  value,
  variant,
}: PasswordInputProps) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true)

  return (
    <Box display="flex">
      <Box flex="1">
        <Input
          elemAttrs={{
            ...elemAttrs,
            type: hidePassword ? 'password' : 'text',
            autoComplete,
            style: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
          elemRef={elemRef}
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
          scale={scale}
          value={value}
          variant={variant}
        />
      </Box>
      <IconButton
        elemAttrs={{
          style: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        }}
        iconName={hidePassword ? 'eye-off' : 'eye'}
        onClick={() => setHidePassword(!hidePassword)}
        scale={scale}
        variant={variant}
        intent={intent}
        color={color}
        disabled={disabled}
      />
    </Box>
  )
}

PasswordInput.displayName = 'PasswordInput'
