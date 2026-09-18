import { useLayoutEffect, useRef, useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { useControlledValue } from 'lib/hooks'

import {
  DEFAULT_SWITCH_INTENT,
  DEFAULT_SWITCH_RIPPLE,
  DEFAULT_SWITCH_SCALE,
  SWITCH_SCALE_MAP,
} from './constants'
import type { SwitchProps } from './types'

export const Switch = ({
  // Box
  elemRef,
  elemAttrs,
  disabled,
  color,
  ripple = DEFAULT_SWITCH_RIPPLE,
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

  const blockSize = parseInt(CONTROL_SCALE_MAP[scale].blockSize)
  const gapSize = SWITCH_SCALE_MAP[scale].gapSize

  return (
    <Box elemTag="span" position="relative" display="inline-block" overflow="clip">
      <Box
        elemTag="input"
        elemRef={elemRef}
        elemAttrs={{
          ...elemAttrs,
          type: 'checkbox',
          role: 'switch',
          ...(isControlled ? { checked: currentChecked } : { defaultChecked: currentChecked }),
          onChange: e => setCurrentChecked((e.target as HTMLInputElement).checked),
          style: {
            ...elemAttrs?.style,
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            WebkitTapHighlightColor: 'transparent',
          },
        }}
        interactive
        ripple={ripple}
        disabled={disabled}
        bgMode={currentChecked ? 'filled' : 'tinted'}
        intent={intent}
        color={color}
        blockSize={blockSize + 'px'}
        inlineSize={blockSize * 2 - gapSize * 2 + 'px'}
        cursor="pointer"
      />
      <Box
        key={String(scale)}
        elemAttrs={{ 'aria-hidden': true }}
        elemTag="span"
        position="absolute"
        top={gapSize + 'px'}
        left={blockSize - gapSize + 'px'}
        display="inline-block"
        pointerEvents="none"
        transform={animatedChecked ? 'translateX(0)' : `translateX(-${blockSize - gapSize * 2}px)`}
        transition="transform 200ms cubic-bezier(0.25, 0, 0.4, 1)"
      >
        <Box
          elemTag="span"
          drawable
          bgMode="filled"
          intent="neutral"
          color={color}
          disabled={disabled}
          blockSize={blockSize - gapSize * 2 + 'px'}
          inlineSize={blockSize - gapSize * 2 + 'px'}
        />
      </Box>
    </Box>
  )
}

Switch.displayName = 'Switch'
