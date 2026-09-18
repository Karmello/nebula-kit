import { useState } from 'react'
import classNames from 'classnames'

import { Icon } from 'lib/components/core/Icon'
import { withPrefix } from 'lib/helpers'

import { Box } from '../Box'
import {
  CHECKBOX_SCALE_MAP,
  CHECKBOX_VARIANT_MAP,
  DEFAULT_CHECKBOX_INTENT,
  DEFAULT_CHECKBOX_SCALE,
  DEFAULT_CHECKBOX_VARIANT,
} from './constants'
import { type CheckboxProps } from './types'

import './checkbox.scss'

export const Checkbox = ({
  // Box
  elemAttrs,
  elemRef,
  color,
  intent = DEFAULT_CHECKBOX_INTENT,
  disabled,
  // own
  variant = DEFAULT_CHECKBOX_VARIANT,
  scale = DEFAULT_CHECKBOX_SCALE,
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
      className={classNames(withPrefix('checkbox'), elemAttrs?.className)}
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      drawable
      textMode={CHECKBOX_VARIANT_MAP[variant].textMode}
      intent={intent}
      color={color}
      disabled={disabled}
      display="inline-block"
      borderWidth="0px"
    >
      <Box
        elemTag="input"
        elemAttrs={{
          type: 'checkbox',
          ...(isControlled ? { checked: currentChecked } : { defaultChecked: currentChecked }),
          onChange: e => handleChange((e.target as HTMLInputElement).checked),
        }}
        drawable
        interactive
        disabled={disabled}
        bgMode={CHECKBOX_VARIANT_MAP[variant].bgMode}
        borderMode={CHECKBOX_VARIANT_MAP[variant].borderMode}
        textMode={CHECKBOX_VARIANT_MAP[variant].textMode}
        intent={intent}
        color={color}
        blockSize={CHECKBOX_SCALE_MAP[scale].blockSize}
        inlineSize={CHECKBOX_SCALE_MAP[scale].blockSize}
      />
      {currentChecked ? <Icon name="check" size={CHECKBOX_SCALE_MAP[scale].iconSize} /> : null}
    </Box>
  )
}

Checkbox.displayName = 'Checkbox'
