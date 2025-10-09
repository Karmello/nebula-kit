import { useState } from 'react'

import { Box, Flex, Button, Animate, RevealProps } from 'lib/components'

import {
  DEFAULT_REVEAL_LABEL_ALIGN,
  DEFAULT_REVEAL_INTENT,
  DEFAULT_REVEAL_SIZE,
  RevealTag,
} from './definitions'

export const Reveal = <T extends RevealTag = 'div'>({
  // HtmlTag
  tag = 'div' as T,
  tagAttrs,
  tagRef,
  children,
  // Box
  intent = DEFAULT_REVEAL_INTENT,
  // Button
  disabled,
  size = DEFAULT_REVEAL_SIZE,
  labelIntent,
  labelAlign = DEFAULT_REVEAL_LABEL_ALIGN,
  // own
  label,
}: RevealProps<T>) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Box
      tag={tag}
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      variant="outline"
      intent={intent}
      overflowX="hidden"
      overflowY="hidden"
    >
      <Flex flexDirection="column" alignItems="stretch">
        <Button
          disabled={disabled}
          size={size}
          labelIntent={labelIntent}
          labelAlign={labelAlign}
          intent={intent}
          iconName={open ? 'chevron-up' : 'chevron-down'}
          iconPosition="right"
          tagAttrs={{
            style: { borderRadius: 0 },
            onClick: () => {
              setOpen(!open)
            },
          }}
        >
          {label}
        </Button>
        <Box intent="neutral">
          <Animate property="blockSize" visible={open} calcSizeTrigger={open}>
            {children}
          </Animate>
        </Box>
      </Flex>
    </Box>
  )
}

Reveal.displayName = 'Reveal'
