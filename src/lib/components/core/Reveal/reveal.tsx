import { useState } from 'react'

import { Box, Flex, Button, Resize, RevealProps } from 'lib/components'

import { DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SIZE } from './definitions'
import { RevealTag } from 'lib/types'

export const Reveal = <T extends RevealTag = 'div'>({
  // Resize
  children,
  // Box
  tag = 'div' as T,
  tagAttrs,
  tagRef,
  intent = DEFAULT_REVEAL_INTENT,
  color,
  // Button
  disabled,
  size = DEFAULT_REVEAL_SIZE,
  // own
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
      <Flex flexDirection="column" alignItems="stretch">
        <Button
          disabled={disabled}
          size={size}
          align="split"
          color={color}
          intent={intent}
          iconName="chevron-down"
          iconPlacement="right"
          tagAttrs={{
            style: { borderRadius: 0 },
            onClick: () => {
              setOpen(!open)
            },
          }}
          iconAngle={open ? 180 : 0}
          ripple={!open}
          bold
          selected={open}
        >
          {label}
        </Button>
        <Box tagAttrs={{ inert: !open }}>
          <Resize property="blockSize" visible={open}>
            {children}
          </Resize>
        </Box>
      </Flex>
    </Box>
  )
}

Reveal.displayName = 'Reveal'
