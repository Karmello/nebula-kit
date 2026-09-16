import { useEffect, useRef, useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { Text } from 'lib/components/core/Text'
import { Floating } from 'lib/components/pro/Floating'
import { useFade } from 'lib/components/pro/useFade'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
  TOOLTIP_VARIANT_MAP,
} from './constants'
import { TooltipProps } from './types'

const TooltipContent = ({
  variant,
  intent,
  color,
  content,
  minInlineSize,
  maxInlineSize,
  visible,
}: Pick<TooltipProps, 'variant' | 'intent' | 'color' | 'content'> & {
  minInlineSize?: number
  maxInlineSize: number
  visible: boolean
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null)

  useFade({ ref: contentRef, visible })

  return (
    <Box
      tagRef={contentRef}
      drawable
      intent="neutral"
      bgMode="filled"
      color={color}
      display="inline-block"
    >
      <Box
        drawable
        bgMode={TOOLTIP_VARIANT_MAP[variant || DEFAULT_TOOLTIP_VARIANT].bgMode}
        borderMode={TOOLTIP_VARIANT_MAP[variant || DEFAULT_TOOLTIP_VARIANT].borderMode}
        textMode={TOOLTIP_VARIANT_MAP[variant || DEFAULT_TOOLTIP_VARIANT].textMode}
        intent={intent}
        color={color}
        paddingBlock="8px"
        paddingInline="16px"
        minInlineSize={`${minInlineSize}px`}
        maxInlineSize={`${maxInlineSize}px`}
      >
        <Text>{content}</Text>
      </Box>
    </Box>
  )
}

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
        <TooltipContent
          variant={variant}
          intent={intent}
          color={color}
          content={content}
          minInlineSize={minInlineSize}
          maxInlineSize={maxInlineSize}
          visible={visible}
        />
      </Floating.Content>
    </Floating>
  )
}

Tooltip.displayName = 'Tooltip'
