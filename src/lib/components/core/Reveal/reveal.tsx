import { useRef, useState } from 'react'

import { Icon } from 'lib/components/core/Icon'
import { Resize } from 'lib/components/core/Resize'
import { Text } from 'lib/components/core/Text'
import { useRotate } from 'lib/components/core/useRotate'
import { CONTROL_SCALE_MAP } from 'lib/constants'

import { Box } from '../Box'
import { DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SCALE } from './constants'
import type { RevealProps } from './types'
import { RevealTag } from './types'

export const Reveal = <T extends RevealTag = 'div'>({
  // Resize
  children,
  // Box
  elemTag = 'div' as T,
  elemAttrs,
  elemRef,
  intent = DEFAULT_REVEAL_INTENT,
  color,
  disabled,
  // own
  scale = DEFAULT_REVEAL_SCALE,
  label,
}: RevealProps<T>) => {
  const [open, setOpen] = useState<boolean>(false)

  const chevronRef = useRef<HTMLSpanElement | null>(null)

  useRotate({ ref: chevronRef, angle: !open ? 0 : 180 })

  return (
    <Box
      elemTag={elemTag}
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      drawable
      borderMode="filled"
      color={color}
      intent={intent}
      overflow="hidden"
      maxInlineSize="100%"
      disabled={disabled}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <Box
        elemTag="button"
        interactive
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        onClick={() => {
          setOpen(!open)
        }}
        elemAttrs={{
          type: 'button',
          style: { borderRadius: 0 },
        }}
        disabled={disabled}
        color={color}
        bgMode="filled"
        surfaceDepth={open ? 'raised' : 'base'}
        intent={intent}
        ripple={!open}
        blockSize={CONTROL_SCALE_MAP[scale].blockSize}
        paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
      >
        <Text
          bold
          fontSize={CONTROL_SCALE_MAP[scale].fontSize}
          lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
        >
          {label}
        </Text>
        <Icon name="chevron-down" size={CONTROL_SCALE_MAP[scale].fontSize} elemRef={chevronRef} />
      </Box>
      <Resize elemAttrs={{ inert: !open }} property="blockSize" visible={open}>
        {children}
      </Resize>
    </Box>
  )
}

Reveal.displayName = 'Reveal'
