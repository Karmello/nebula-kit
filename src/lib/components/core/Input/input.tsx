import { useState } from 'react'
import classNames from 'classnames'

import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'

import { Box } from '../Box'
import { DEFAULT_INPUT_INTENT, DEFAULT_INPUT_SCALE, DEFAULT_INPUT_VARIANT } from './constants'
import { InputProps } from './types'

import './input.scss'

export const Input = ({
  // Box
  tagAttrs,
  tagRef,
  onFocus,
  onBlur,
  variant = DEFAULT_INPUT_VARIANT,
  color,
  intent = DEFAULT_INPUT_INTENT,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
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
      className={classNames(withPrefix('input'), tagAttrs?.className)}
      onFocus={onFocus}
      onBlur={onBlur}
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          fontSize: CONTROL_SCALE_MAP[scale].fontSize,
          lineHeight: CONTROL_SCALE_MAP[scale].lineHeight,
        },
        value: currentValue,
        onChange: e => {
          handleChange((e.target as HTMLInputElement).value)
        },
        placeholder,
        readOnly,
        maxLength,
        autoComplete,
      }}
      tagRef={tagRef}
      bgMode="filled"
      color={color}
      intent={intent}
      disabled={disabled}
      inlineSize="100%"
      interactive
      activeOnFocus
      blockSize={CONTROL_SCALE_MAP[scale].blockSize}
      paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
    />
  )
}

Input.displayName = 'Input'
