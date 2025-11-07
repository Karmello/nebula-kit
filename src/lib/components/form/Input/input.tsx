import { useState } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

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
  intent = DEFAULT_INPUT_INTENT,
  // own
  defaultValue,
  value,
  onChange,
  size = DEFAULT_INPUT_SIZE,
  textIntent,
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
          fontSize: INPUT_SIZE_CONFIG[size || 'md'].fontSize + 'px',
          color: textIntent ? `var(--neb-${textIntent}-ghost-text)` : undefined,
        },
        value: currentValue,
        onChange: e => {
          handleChange((e.target as HTMLInputElement).value)
        },
      }}
      tagRef={tagRef}
      variant={variant}
      intent={intent}
      inlineSize="100%"
      interactive
      activeOnFocus
      {...INPUT_SIZE_CONFIG[size || 'md']}
    />
  )
}

Input.displayName = 'Input'
