import { RefObject, useLayoutEffect, useRef, useState } from 'react'
import {
  flip,
  FloatingPortal,
  offset as floatingOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'

import { resolveLengthToken } from 'lib/helpers'
import { Box, Text } from 'lib/index.core'
import { TooltipProps } from 'lib/index.pro'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_OFFSET,
  DEFAULT_TOOLTIP_PADDING_BLOCK,
  DEFAULT_TOOLTIP_PADDING_INLINE,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
} from './constants'

export const Tooltip = ({
  // Box
  children,
  variant = DEFAULT_TOOLTIP_VARIANT,
  intent = DEFAULT_TOOLTIP_INTENT,
  color,
  padding,
  paddingBlock = DEFAULT_TOOLTIP_PADDING_BLOCK,
  paddingInline = DEFAULT_TOOLTIP_PADDING_INLINE,
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
        tagRef={triggerRef}
        tagAttrs={getReferenceProps()}
        cursor={mode === 'click' ? 'pointer' : undefined}
      >
        {children}
      </Box>
      {open && (
        <FloatingPortal>
          <Box
            tagRef={refs.setFloating as unknown as RefObject<HTMLDivElement>}
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
