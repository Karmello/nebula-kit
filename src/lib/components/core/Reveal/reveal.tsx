import { useState } from 'react'

import { CONTROL_SCALE_MAP } from 'lib/constants'
import { Icon, Resize, RevealProps, Rotate, Text } from 'lib/index.core'
import { RevealTag } from 'lib/types'

import { Box } from '../Box'
import { DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SCALE } from './definitions'

export const Reveal = <T extends RevealTag = 'div'>({
  // Resize
  children,
  // Box
  tag = 'div' as T,
  tagAttrs,
  tagRef,
  intent = DEFAULT_REVEAL_INTENT,
  color,
  disabled,
  // own
  scale = DEFAULT_REVEAL_SCALE,
  label,
}: RevealProps<T>) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Box
      tag={tag}
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      drawable
      variant="outline"
      color={color}
      intent={intent}
      borderRadius="var(--neb-border-radius)"
      overflow="hidden"
      maxInlineSize="100%"
      surface="dividing"
      disabled={disabled}
    >
      <Box display="flex" flexDirection="column" alignItems="stretch">
        <Box
          tag="button"
          interactive
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor="pointer"
          tagAttrs={{
            type: 'button',
            style: { borderRadius: 0 },
            onClick: () => {
              setOpen(!open)
            },
          }}
          disabled={disabled}
          color={color}
          variant="solid"
          intent={intent}
          ripple={!open}
          surface={open ? 'selected' : undefined}
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
          <Rotate angle={!open ? 0 : 180}>
            <Icon name="chevron-down" size={CONTROL_SCALE_MAP[scale].fontSize} />
          </Rotate>
        </Box>
        <Box tagAttrs={{ inert: !open }}>
          <Resize property="blockSize" visible={open}>
            {children}
          </Resize>
        </Box>
      </Box>
    </Box>
  )
}

Reveal.displayName = 'Reveal'
