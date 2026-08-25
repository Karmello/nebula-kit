import { useState } from 'react'
import classNames from 'classnames'

import { Icon } from 'lib/components/core/Icon'
import { withPrefix } from 'lib/helpers'

import { Box } from '../Box'
import {
  CHECKBOX_SIZE_MAP,
  DEFAULT_CHECKBOX_INTENT,
  DEFAULT_CHECKBOX_SIZE,
  DEFAULT_CHECKBOX_VARIANT,
} from './constants'
import { type CheckboxProps } from './types'

import './checkbox.scss'

export const Checkbox = ({
  // Box
  tagAttrs,
  tagRef,
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
        color={color}
        blockSize={CHECKBOX_SIZE_MAP[size || 'xs'].blockSize}
        inlineSize={CHECKBOX_SIZE_MAP[size || 'xs'].blockSize}
      />
      {currentChecked ? (
        <Icon
          tagAttrs={{
            style: {
              blockSize: CHECKBOX_SIZE_MAP[size || 'xs'].iconSize,
              inlineSize: CHECKBOX_SIZE_MAP[size || 'xs'].iconSize,
            },
          }}
          name="check"
        />
      ) : null}
    </Box>
  )
}

Checkbox.displayName = 'Checkbox'
