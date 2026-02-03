import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { Box, Slide } from 'lib/components'
import { BUTTON_SIZE_CONFIG } from 'lib/components/core/controls/Button'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_SWITCH_SIZE, SWITCH_SIZE_MAP, SwitchProps } from './definitions'

import './switch.scss'

export const Switch = ({
  // Box
  tagAttrs,
  tagRef,
  disabled,
  color,
  // own
  checked,
  defaultChecked,
  onChange,
  size = DEFAULT_SWITCH_SIZE,
}: SwitchProps) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked ?? false)

  const isControlled = checked !== undefined
  const currentChecked = isControlled ? checked : internalChecked

  const [animatedChecked, setAnimatedChecked] = useState(currentChecked)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setAnimatedChecked(currentChecked)
    })

    return () => cancelAnimationFrame(id)
  }, [currentChecked])

  const handleChange = (checked: boolean) => {
    if (!isControlled) setInternalChecked(checked)
    onChange?.(checked)
  }

  const thumbBlockSize = `calc(${BUTTON_SIZE_CONFIG[size || 'md'].blockSize} - var(--neb-border-width) * ${SWITCH_SIZE_MAP[size || 'md'].borderMultiplier * 2})`

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('switch'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      display="inline-block"
      overflow="clip"
    >
      <Box
        tag="input"
        tagAttrs={{
          type: 'checkbox',
          role: 'switch',
          ...(isControlled ? { checked: currentChecked } : { defaultChecked: currentChecked }),
          onChange: e => handleChange((e.target as HTMLInputElement).checked),
        }}
        drawable
        interactive
        disabled={disabled}
        variant="solid"
        intent={animatedChecked && !disabled ? 'primary' : 'tertiary'}
        color={color}
        blockSize={BUTTON_SIZE_CONFIG[size || 'md'].blockSize}
        inlineSize={`calc(${BUTTON_SIZE_CONFIG[size || 'md'].blockSize} * 2 - var(--neb-border-width) * ${SWITCH_SIZE_MAP[size || 'md'].borderMultiplier * 2})`}
      />
      <Slide
        tagAttrs={{
          className: withPrefix('switch-thumb'),
          style: {
            top: `calc(var(--neb-border-width) * ${SWITCH_SIZE_MAP[size || 'md'].borderMultiplier})`,
            left: `calc(${BUTTON_SIZE_CONFIG[size || 'md'].blockSize} - var(--neb-border-width) * ${SWITCH_SIZE_MAP[size || 'md'].borderMultiplier})`,
          },
        }}
        from="left"
        visible={animatedChecked}
      >
        <Box
          drawable
          variant="solid"
          intent="neutral"
          blockSize={thumbBlockSize}
          inlineSize={thumbBlockSize}
        />
      </Slide>
    </Box>
  )
}

Switch.displayName = 'Switch'
