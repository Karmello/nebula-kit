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
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked ?? false)

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
      variant={variant}
      intent={intent}
      color={color}
      disabled={disabled}
      display="inline-block"
      borderWidth="0px"
    >
      <Box
        tag="input"
        tagAttrs={{
          type: 'checkbox',
          ...(isControlled ? { checked: currentChecked } : { defaultChecked: currentChecked }),
          onChange: e => handleChange((e.target as HTMLInputElement).checked),
        }}
        drawable
        interactive
        disabled={disabled}
        variant={variant}
        intent={intent}
        blockSize={CHECKBOX_SIZE_CONFIG[size || 'xs'].blockSize}
        inlineSize={CHECKBOX_SIZE_CONFIG[size || 'xs'].blockSize}
      />
      {currentChecked ? <Icon name="check" size={CHECKBOX_SIZE_CONFIG[size || 'xs'].iconSize} /> : null}
    </Box>
  )
}

Checkbox.displayName = 'Checkbox'
