import { useState } from 'react'
import classNames from 'classnames'

import { CONTROL_SCALE_MAP, TYPOGRAPHY_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { TextareaProps } from 'lib/index.core'

import { Box } from '../Box'
import {
  DEFAULT_TEXTAREA_INLINE_SIZE,
  DEFAULT_TEXTAREA_INTENT,
  DEFAULT_TEXTAREA_MAX_INLINE_SIZE,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_VARIANT,
} from './definitions'

import './textarea.scss'

export const Textarea = ({
  // Box
  tagAttrs,
  tagRef,
  variant = DEFAULT_TEXTAREA_VARIANT,
  color,
  intent = DEFAULT_TEXTAREA_INTENT,
  disabled,
  inlineSize = DEFAULT_TEXTAREA_INLINE_SIZE,
  minInlineSize,
  maxInlineSize = DEFAULT_TEXTAREA_MAX_INLINE_SIZE,
  // own
  defaultValue,
  value,
  onChange,
  onFocus,
  onBlur,
  rows = DEFAULT_TEXTAREA_ROWS,
  resize = DEFAULT_TEXTAREA_RESIZE,
  placeholder,
  readOnly,
  maxLength,
}: TextareaProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

  return (
    <Box
      tag="textarea"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('textarea'), tagAttrs?.className),
        style: {
          fontSize: TYPOGRAPHY_MAP.body.fontSize,
          lineHeight: TYPOGRAPHY_MAP.body.lineHeight,
          resize,
          ...tagAttrs?.style,
        },
        value: currentValue,
        onChange: e => {
          handleChange((e.target as HTMLTextAreaElement).value)
        },
        onFocus,
        onBlur,
        rows,
        placeholder,
        readOnly,
        maxLength,
      }}
      tagRef={tagRef}
      drawable
      variant={variant}
      color={color}
      intent={intent}
      disabled={disabled}
      inlineSize={inlineSize}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      padding={CONTROL_SCALE_MAP.md.fontSize}
      interactive
      activeOnFocus
    />
  )
}

Textarea.displayName = 'Textarea'
