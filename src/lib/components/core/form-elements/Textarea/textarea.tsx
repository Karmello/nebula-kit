import { useState } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { CONTROL_SIZE_TOKENS, FONT_SIZE_TOKENS } from 'lib/definitions'

import {
  DEFAULT_TEXTAREA_INLINE_SIZE,
  DEFAULT_TEXTAREA_INTENT,
  DEFAULT_TEXTAREA_MAX_INLINE_SIZE,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_VARIANT,
  TextareaProps,
} from './definitions'

import './textarea.scss'

export const Textarea = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // Box
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
          ...tagAttrs?.style,
          fontSize: FONT_SIZE_TOKENS.regular.body.fontSize,
          lineHeight: FONT_SIZE_TOKENS.regular.body.lineHeight,
          resize,
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
      padding={CONTROL_SIZE_TOKENS.md.paddingInline}
      interactive
      activeOnFocus
    />
  )
}

Textarea.displayName = 'Textarea'
