import { useState } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import './input.scss'

import {
  DEFAULT_INPUT_INTENT,
  DEFAULT_INPUT_SIZE,
  DEFAULT_INPUT_VARIANT,
  INPUT_SIZE_CONFIG,
  InputProps,
} from './definitions'

export const Input = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // Box
  variant = DEFAULT_INPUT_VARIANT,
  color,
  intent = DEFAULT_INPUT_INTENT,
  // own
  defaultValue,
  value,
  onChange,
  onBlur,
  size = DEFAULT_INPUT_SIZE,
  startSlot,
  endSlot,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

  return (
    <Box position="relative">
      {startSlot ? (
        <Box tag="span" position="absolute">
          {startSlot}
        </Box>
      ) : null}
      <Box
        tag="input"
        tagAttrs={{
          ...tagAttrs,
          className: classNames(withPrefix('input'), tagAttrs?.className),
          style: {
            ...tagAttrs?.style,
            fontSize: INPUT_SIZE_CONFIG[size || 'md'].fontSize + 'px',
            color: 'var(--neb-text)',
            caretColor: 'var(--neb-text)',
          },
          value: currentValue,
          onChange: e => {
            handleChange((e.target as HTMLInputElement).value)
          },
          onBlur,
        }}
        tagRef={tagRef}
        variant={variant}
        color={color}
        intent={intent}
        inlineSize="100%"
        interactive
        {...INPUT_SIZE_CONFIG[size || 'md']}
      />
      {endSlot ? (
        <Box tag="span" position="absolute">
          {endSlot}
        </Box>
      ) : null}
    </Box>
  )
}

Input.displayName = 'Input'
