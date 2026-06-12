import { useState } from 'react'

import { Button, Flex, Resize, RevealProps } from 'lib/index.core'
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
  // Button
  disabled,
  scale = DEFAULT_REVEAL_SCALE,
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
          scale={scale}
          align="split"
          color={color}
          intent={intent}
          iconName="chevron-down"
          iconPlacement="right"
          tagAttrs={{
            style: { borderRadius: 0 },
          }}
          ripple={!open}
          bold
          selected={open}
          onClick={() => {
            setOpen(!open)
          }}
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
