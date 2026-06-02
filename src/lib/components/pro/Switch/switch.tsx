import { useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

import { CONTROL_SIZE_MAP } from 'lib/constants'
import { resolveLengthValue, withPrefix } from 'lib/helpers'
import { Box, BoxProps, Slide } from 'lib/index.core'
import { SwitchProps } from 'lib/index.pro'

import { DEFAULT_SWITCH_INTENT, DEFAULT_SWITCH_SIZE, SWITCH_BORDER_MULTIPLIER } from './definitions'

import './switch.scss'

export const Switch = ({
  // Box
  tagAttrs,
  tagRef,
  disabled,
  color,
  intent = DEFAULT_SWITCH_INTENT,
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

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => {
      setAnimatedChecked(currentChecked)
    })

    return () => cancelAnimationFrame(id)
  }, [currentChecked])

  const handleChange = (checked: boolean) => {
    if (!isControlled) setInternalChecked(checked)
    onChange?.(checked)
  }

  const resolvedBlockSize = resolveLengthValue(CONTROL_SIZE_MAP[size || 'md'].blockSize)

  const thumbBlockSize =
    `calc(${resolvedBlockSize} - var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER * 2})` as BoxProps['blockSize']

  return (
    <Box
      key={String(size)}
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
        elevated={animatedChecked && !disabled}
        surface={animatedChecked && !disabled ? 'selected' : undefined}
        disabled={disabled}
        variant="solid"
        intent={intent}
        color={color}
        blockSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
        inlineSize={`calc(${resolvedBlockSize} * 2 - var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER * 2})`}
      />
      <Slide
        tagAttrs={{
          className: withPrefix('switch-thumb'),
          style: {
            top: `calc(var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER})`,
            left: `calc(${resolvedBlockSize} - var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER})`,
          },
        }}
        from="left"
        visible={animatedChecked}
        easing="cubic-bezier(0.25, 0, 0.4, 1)"
      >
        <Box drawable variant="solid" intent="neutral" blockSize={thumbBlockSize} inlineSize={thumbBlockSize} />
      </Slide>
    </Box>
  )
}

Switch.displayName = 'Switch'
