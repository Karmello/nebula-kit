import { useLayoutEffect, useRef, useState } from 'react'

import {
  useFloating,
  useHover,
  useClick,
  useDismiss,
  useInteractions,
  FloatingPortal,
  offset as floatingOffset,
  flip,
  shift,
  useRole,
} from '@floating-ui/react'

import { Box, Text } from 'lib/components'
import { resolveLengthToken } from 'lib/helpers'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_OFFSET,
  DEFAULT_TOOLTIP_PADDING,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
} from './constants'

import type { TooltipProps } from './types'

export const Tooltip = ({
  // Box
  children,
  variant = DEFAULT_TOOLTIP_VARIANT,
  intent = DEFAULT_TOOLTIP_INTENT,
  color,
  padding = DEFAULT_TOOLTIP_PADDING,
  paddingBlock,
  paddingInline,
  // own
  content,
  placement = DEFAULT_TOOLTIP_PLACEMENT,
  mode = DEFAULT_TOOLTIP_MODE,
  offset = DEFAULT_TOOLTIP_OFFSET,
  minInlineSize,
  maxInlineSize = DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
}: TooltipProps) => {
  const [open, setOpen] = useState(false)

  const triggerRef = useRef(null)

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [floatingOffset(Number.parseFloat(resolveLengthToken(offset as any))), flip(), shift()],
  })

  useLayoutEffect(() => {
    refs.setReference(triggerRef.current)
  }, [])

  const hover = useHover(context, { enabled: mode === 'hover' })
  const click = useClick(context, { enabled: mode === 'click' })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, dismiss, role])

  return (
    <>
      <Box
        tag="span"
        display="inline-block"
        tagRef={triggerRef as any}
        tagAttrs={{
          ...(getReferenceProps() as any),
          style: { cursor: mode === 'click' ? 'pointer' : undefined },
        }}
      >
        {children}
      </Box>
      {open && (
        <FloatingPortal>
          <Box
            tagRef={refs.setFloating as any}
            tagAttrs={{
              style: {
                ...floatingStyles,
                zIndex: 'var(--neb-z-tooltip)',
              },
              ...getFloatingProps(),
            }}
          >
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
                padding={padding}
                paddingBlock={paddingBlock}
                paddingInline={paddingInline}
              >
                <Text>{content}</Text>
              </Box>
            </Box>
          </Box>
        </FloatingPortal>
      )}
    </>
  )
}

Tooltip.displayName = 'Tooltip'
