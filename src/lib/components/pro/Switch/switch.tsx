import { useLayoutEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components/core/Box'
import { useSlide } from 'lib/components/core/useSlide'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_SWITCH_INTENT, DEFAULT_SWITCH_SCALE, SWITCH_BORDER_MULTIPLIER } from './constants'
import type { SwitchProps } from './types'

import './switch.scss'

export const Switch = ({
  // Box
  elemAttrs,
  elemRef,
  disabled,
  color,
  intent = DEFAULT_SWITCH_INTENT,
  // own
  checked,
  defaultChecked,
  onChange,
  scale = DEFAULT_SWITCH_SCALE,
}: SwitchProps) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked ?? false)

  const isControlled = checked !== undefined
  const currentChecked = isControlled ? checked : internalChecked

  const [animatedChecked, setAnimatedChecked] = useState(currentChecked)
  const thumbRef = useRef<HTMLDivElement | null>(null)

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

  const resolvedBlockSize = CONTROL_SCALE_MAP[scale].blockSize

  const thumbBlockSize =
    `calc(${resolvedBlockSize} - var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER * 2})` as BoxProps['blockSize']

  useSlide({
    ref: thumbRef,
    from: 'left',
    visible: animatedChecked,
    easing: 'cubic-bezier(0.25, 0, 0.4, 1)',
  })

  return (
    <Box
      key={String(scale)}
      className={classNames(withPrefix('switch'), elemAttrs?.className)}
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      display="inline-block"
      overflow="clip"
    >
      <Box
        elemTag="input"
        elemAttrs={{
          type: 'checkbox',
          role: 'switch',
          ...(isControlled ? { checked: currentChecked } : { defaultChecked: currentChecked }),
          onChange: e => handleChange((e.target as HTMLInputElement).checked),
        }}
        drawable
        interactive
        surfaceDepth={animatedChecked && !disabled ? 'raised' : undefined}
        bgRole={animatedChecked && !disabled ? 'selection' : undefined}
        disabled={disabled}
        bgMode="filled"
        intent={intent}
        color={color}
        blockSize={CONTROL_SCALE_MAP[scale].blockSize}
        inlineSize={`calc(${resolvedBlockSize} * 2 - var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER * 2})`}
      />
      <Box
        elemRef={thumbRef}
        className={withPrefix('switch-thumb')}
        elemAttrs={{
          style: {
            top: `calc(var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER})`,
            left: `calc(${resolvedBlockSize} - var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER})`,
          },
        }}
        display="inline-block"
      >
        <Box
          drawable
          bgMode="filled"
          intent="neutral"
          blockSize={thumbBlockSize}
          inlineSize={thumbBlockSize}
        />
      </Box>
    </Box>
  )
}

Switch.displayName = 'Switch'
