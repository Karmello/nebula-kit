import { useEffect, useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { Text } from 'lib/components/core/Text'
import { Fade } from 'lib/components/pro/Fade'
import { Floating } from 'lib/components/pro/Floating'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
} from './constants'
import { TooltipProps } from './types'

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
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => {
      setVisible(open)
    })
  }, [open])

  return (
    <Floating open={open} onOpenChange={setOpen} mode={mode} placement={placement} offset={8}>
      <Floating.Trigger display="inline-block" cursor={mode === 'click' ? 'pointer' : undefined}>
        {children}
      </Floating.Trigger>
      <Floating.Content>
        <Fade visible={visible}>
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
              paddingBlock="8px"
              paddingInline="16px"
            >
              <Text>{content}</Text>
            </Box>
          </Box>
        </Fade>
      </Floating.Content>
    </Floating>
  )
}

Tooltip.displayName = 'Tooltip'
