import { useState } from 'react'
import classNames from 'classnames'

import { Box, Icon } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  CheckboxProps,
  CHECKBOX_SIZE_CONFIG,
  DEFAULT_CHECKBOX_SIZE,
  DEFAULT_CHECKBOX_VARIANT,
  DEFAULT_CHECKBOX_INTENT,
} from './definitions'

import './checkbox.scss'

export const Checkbox = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // Box
  color,
  intent = DEFAULT_CHECKBOX_INTENT,
  disabled,
  // own
  variant = DEFAULT_CHECKBOX_VARIANT,
  size = DEFAULT_CHECKBOX_SIZE,
  checked,
  defaultChecked,
  onChange,
}: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState<boolean | undefined>(defaultChecked)

  const isControlled = checked !== undefined
  const currentChecked = isControlled ? checked : internalChecked

  const handleChange = (checked: boolean) => {
    if (!isControlled) setInternalChecked(checked)
    onChange?.(checked)
  }

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('checkbox'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      drawable
      interactive
      color={color}
      intent={intent}
      variant={variant}
      disabled={disabled}
      blockSize={CHECKBOX_SIZE_CONFIG[size || 'xs'].blockSize}
      inlineSize={CHECKBOX_SIZE_CONFIG[size || 'xs'].blockSize}
    >
      <Box
        tag="input"
        tagAttrs={{
          type: 'checkbox',
          checked: currentChecked,
          onChange: e => handleChange((e.target as HTMLInputElement).checked),
        }}
        blockSize={CHECKBOX_SIZE_CONFIG[size || 'xs'].blockSize}
        inlineSize={CHECKBOX_SIZE_CONFIG[size || 'xs'].blockSize}
      />
      {currentChecked ? <Icon name="check" size={CHECKBOX_SIZE_CONFIG[size || 'xs'].iconSize} /> : null}
    </Box>
  )
}

Checkbox.displayName = 'Checkbox'
