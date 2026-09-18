import { useLayoutEffect, useRef, useState } from 'react'

import { Box, BoxProps } from 'lib/components/core/Box'
import { useSlide } from 'lib/components/core/useSlide'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { useControlledValue } from 'lib/hooks'

import { DEFAULT_SWITCH_INTENT, DEFAULT_SWITCH_SCALE, SWITCH_BORDER_MULTIPLIER } from './constants'
import type { SwitchProps } from './types'

export const Switch = ({
  // Box
  elemRef,
  elemAttrs,
  disabled,
  color,
  // own
  checked,
  defaultChecked,
  onChange,
  intent = DEFAULT_SWITCH_INTENT,
  scale = DEFAULT_SWITCH_SCALE,
}: SwitchProps) => {
  const [rawChecked, setCurrentChecked, isControlled] = useControlledValue<boolean>({
    value: checked,
    defaultValue: defaultChecked ?? false,
    onChange,
  })
  const currentChecked = rawChecked ?? false

  const [animatedChecked, setAnimatedChecked] = useState(currentChecked)
  const thumbRef = useRef<HTMLDivElement | null>(null)
  const isMountedRef = useRef(false)

  useLayoutEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true
      return
    }

    const id = requestAnimationFrame(() => {
      setAnimatedChecked(currentChecked)
    })

    return () => cancelAnimationFrame(id)
  }, [currentChecked])

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
      elemTag="span"
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      position="relative"
      display="inline-block"
      overflow="clip"
    >
      <Box
        elemTag="input"
        elemAttrs={{
          type: 'checkbox',
          role: 'switch',
          ...(isControlled ? { checked: currentChecked } : { defaultChecked: currentChecked }),
          onChange: e => setCurrentChecked((e.target as HTMLInputElement).checked),
          style: {
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            WebkitTapHighlightColor: 'transparent',
          },
        }}
        drawable
        disabled={disabled}
        bgMode={currentChecked ? 'filled' : 'tinted'}
        intent={intent}
        color={color}
        blockSize={CONTROL_SCALE_MAP[scale].blockSize}
        inlineSize={`calc(${resolvedBlockSize} * 2 - var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER * 2})`}
        cursor="pointer"
      />
      <Box
        elemTag="span"
        elemRef={thumbRef}
        position="absolute"
        top={`calc(var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER})`}
        left={`calc(${resolvedBlockSize} - var(--neb-border-width) * ${SWITCH_BORDER_MULTIPLIER})`}
        display="inline-block"
        pointerEvents="none"
      >
        <Box
          elemTag="span"
          drawable
          bgMode="filled"
          intent="neutral"
          color={color}
          disabled={disabled}
          blockSize={thumbBlockSize}
          inlineSize={thumbBlockSize}
        />
      </Box>
    </Box>
  )
}

Switch.displayName = 'Switch'
