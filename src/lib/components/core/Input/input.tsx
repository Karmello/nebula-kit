import { useState } from 'react'
import classNames from 'classnames'

import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { InputProps } from 'lib/index.core'

import { Box } from '../Box'
import { DEFAULT_INPUT_INTENT, DEFAULT_INPUT_SCALE, DEFAULT_INPUT_VARIANT } from './constants'

import './input.scss'

export const Input = ({
  // Box
  tagAttrs,
  tagRef,
  variant = DEFAULT_INPUT_VARIANT,
  color,
  intent = DEFAULT_INPUT_INTENT,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  onFocus,
  onBlur,
  scale = DEFAULT_INPUT_SCALE,
  placeholder,
  readOnly,
  maxLength,
  autoComplete,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

  return (
    <Box
      tag="input"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('input'), tagAttrs?.className),
        style: {
          ...tagAttrs?.style,
          fontSize: CONTROL_SCALE_MAP[scale || 'md'].fontSize,
          lineHeight: CONTROL_SCALE_MAP[scale || 'md'].lineHeight,
        },
        value: currentValue,
        onChange: e => {
          handleChange((e.target as HTMLInputElement).value)
        },
        onFocus,
        onBlur,
        placeholder,
        readOnly,
        maxLength,
        autoComplete,
      }}
      tagRef={tagRef}
      variant={variant}
      color={color}
      intent={intent}
      disabled={disabled}
      inlineSize="100%"
      interactive
      activeOnFocus
      blockSize={CONTROL_SCALE_MAP[scale || 'md'].blockSize}
      paddingInline={CONTROL_SCALE_MAP[scale || 'md'].paddingInline}
    />
  )
}

Input.displayName = 'Input'
