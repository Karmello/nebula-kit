import { useState } from 'react'

import { resolveLengthToken } from 'lib/helpers'
import { Box, Text } from 'lib/index.core'
import { Floating, TooltipProps } from 'lib/index.pro'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
} from './constants'

export const Tooltip = ({
  // Box
  children,
  variant = DEFAULT_TOOLTIP_VARIANT,
  intent = DEFAULT_TOOLTIP_INTENT,
  color,
  // own
  content,
  placement = DEFAULT_TOOLTIP_PLACEMENT,
  mode = DEFAULT_TOOLTIP_MODE,
  minInlineSize,
  maxInlineSize = DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
}: TooltipProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Floating
      open={open}
      onOpenChange={setOpen}
      mode={mode}
      placement={placement}
      offset={Number.parseFloat(resolveLengthToken('xs'))}
    >
      <Floating.Trigger display="inline-block" cursor={mode === 'click' ? 'pointer' : undefined}>
        {children}
      </Floating.Trigger>
      <Floating.Content>
        <Box
          drawable
          variant={variant}
          intent={intent}
          color={color}
          minInlineSize={`${minInlineSize}px`}
          maxInlineSize={`${maxInlineSize}px`}
        >
          <Box
            drawable
            variant="solid"
            intent={variant === 'outline' ? 'neutral' : intent}
            color={color}
            paddingBlock="xs"
            paddingInline="sm"
          >
            <Text>{content}</Text>
          </Box>
        </Box>
      </Floating.Content>
    </Floating>
  )
}

Tooltip.displayName = 'Tooltip'
