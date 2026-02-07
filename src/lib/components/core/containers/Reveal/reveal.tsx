import { useState } from 'react'

import { Box, Flex, Button, Resize, RevealProps } from 'lib/components'

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
    >
      <Flex flexDirection="column" alignItems="stretch">
        <Button
          disabled={disabled}
          size={size}
          justifyContent="space-between"
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
          highlighted={open}
        >
          {label}
        </Button>
        <Box tagAttrs={{ inert: !open }}>
          <Resize property="blockSize" visible={open} easing="cubic-bezier(0.25, 0.1, 0.25, 1)">
            {children}
          </Resize>
        </Box>
      </Flex>
    </Box>
  )
}

Reveal.displayName = 'Reveal'
