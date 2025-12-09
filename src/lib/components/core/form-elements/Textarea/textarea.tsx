import { useState } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  DEFAULT_TEXTAREA_INLINE_SIZE,
  DEFAULT_TEXTAREA_INTENT,
  DEFAULT_TEXTAREA_MAX_INLINE_SIZE,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_VARIANT,
  TextareaProps,
} from './definitions'

import { TEXT_TYPOGRAPHY_CONFIG } from '../../base/Text/definitions'
import { INPUT_SIZE_CONFIG } from '../Input'

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
  onBlur,
  rows = DEFAULT_TEXTAREA_ROWS,
  resize = DEFAULT_TEXTAREA_RESIZE,
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
          fontSize: TEXT_TYPOGRAPHY_CONFIG.regular.body.fontSize,
          lineHeight: TEXT_TYPOGRAPHY_CONFIG.regular.body.lineHeight,
          padding: INPUT_SIZE_CONFIG.md.paddingLeft,
          resize,
        },
        value: currentValue,
        onChange: e => {
          handleChange((e.target as HTMLTextAreaElement).value)
        },
        onBlur,
        rows,
      }}
      tagRef={tagRef}
      variant={variant}
      color={color}
      intent={intent}
      disabled={disabled}
      inlineSize={inlineSize}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      interactive
    />
  )
}

Textarea.displayName = 'Textarea'
