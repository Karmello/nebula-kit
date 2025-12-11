import { useState } from 'react'

import { Box, Flex, Button, Resize, RevealProps } from 'lib/components'
import { useNebkitStore } from 'lib/state'

import { DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SIZE, RevealTag } from './definitions'

export const Reveal = <T extends RevealTag = 'div'>({
  // HtmlTag
  tag = 'div' as T,
  tagAttrs,
  tagRef,
  children,
  // Box
  intent = DEFAULT_REVEAL_INTENT,
  color,
  // Button
  disabled,
  size = DEFAULT_REVEAL_SIZE,
  // own
  label,
}: RevealProps<T>) => {
  const [open, setOpen] = useState<boolean>(false)

  const { brand } = useNebkitStore()

  return (
    <Box
      tag={tag}
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      variant="outline"
      color={color || brand}
      intent={intent}
      borderRadius="var(--neb-border-radius)"
      overflowX="hidden"
      overflowY="hidden"
    >
      <Flex flexDirection="column" alignItems="stretch">
        <Button
          disabled={disabled}
          size={size}
          justifyContent="space-between"
          color={color}
          intent={intent}
          iconName="chevron-down"
          iconPosition="right"
          tagAttrs={{
            style: { borderRadius: 0 },
            onClick: () => {
              setOpen(!open)
            },
          }}
          iconAngle={open ? 180 : 0}
        >
          {label}
        </Button>
        <Box tagAttrs={{ inert: !open }} intent="neutral">
          <Resize property="blockSize" visible={open}>
            {children}
          </Resize>
        </Box>
      </Flex>
    </Box>
  )
}

Reveal.displayName = 'Reveal'
