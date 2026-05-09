import { cloneElement, isValidElement, useEffect, useId, useRef, useState } from 'react'

import { Box, Floating, FloatingResolved, Portal, Text } from 'lib/components'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_OFFSET,
  DEFAULT_TOOLTIP_PADDING,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
  TooltipOpenReason,
  TooltipProps,
} from './definitions'

export const Tooltip = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  color,
  intent = DEFAULT_TOOLTIP_INTENT,
  padding = DEFAULT_TOOLTIP_PADDING,
  paddingBlock,
  paddingInline,
  textAlign,
  minInlineSize,
  maxInlineSize,
  // own
  content,
  placement = DEFAULT_TOOLTIP_PLACEMENT,
  mode = DEFAULT_TOOLTIP_MODE,
  offset = DEFAULT_TOOLTIP_OFFSET,
  variant = DEFAULT_TOOLTIP_VARIANT,
}: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const [openReason, setOpenReason] = useState<TooltipOpenReason | null>(null)
  const [floatingResolved, setFloatingResolved] = useState<FloatingResolved>()

  const localRef = useRef(null)

  const triggerRef = tagRef || localRef

  const tooltipId = useId()

  useEffect(() => {
    if (!open || mode !== 'click') return

    const onDocumentMouseDown = (e: MouseEvent) => {
      const target = e.target as Node

      if (triggerRef.current && !triggerRef.current.contains(target)) {
        setOpen(false)
        setOpenReason(null)
      }
    }

    const onDocumentKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setOpenReason(null)
      }
    }

    document.addEventListener('mousedown', onDocumentMouseDown)
    document.addEventListener('keydown', onDocumentKeyDown)

    return () => {
      document.removeEventListener('mousedown', onDocumentMouseDown)
      document.removeEventListener('keydown', onDocumentKeyDown)
    }
  }, [open, mode, triggerRef])

  const eventHandlers = {
    onMouseEnter: () => {
      if (mode === 'hover' && !open) {
        setOpen(true)
        setOpenReason('hover')
      }
    },

    onMouseLeave: () => {
      if (openReason === 'hover') {
        setOpen(false)
        setOpenReason(null)
      }
    },

    onClick: () => {
      if (mode === 'click') {
        setOpen(prev => !prev)
        setOpenReason(prev => (prev === 'click' ? null : 'click'))
      }
    },
  }

  return (
    <>
      {isValidElement(children) ? (
        cloneElement(children as any, {
          tagRef: triggerRef,
          tagAttrs: {
            ...(children as any).props.tagAttrs,
            ...eventHandlers,
            'aria-describedby': open ? tooltipId : undefined,
            style: {
              ...(children as any).props.tagAttrs?.style,
              cursor: mode === 'click' ? 'pointer' : undefined,
            },
          },
        })
      ) : (
        <Box
          tag="span"
          tagRef={triggerRef}
          tagAttrs={{
            ...tagAttrs,
            ...eventHandlers,
            'aria-describedby': open ? tooltipId : undefined,
            style: {
              ...tagAttrs?.style,
              cursor: mode === 'click' ? 'pointer' : undefined,
            },
          }}
          display="inline-block"
        >
          {children}
        </Box>
      )}

      {open ? (
        <Floating
          anchorRef={triggerRef}
          placement={placement}
          mode="project-both"
          minInlineSize={minInlineSize}
          maxInlineSize={maxInlineSize}
          offset={offset}
          onResolve={(resolved: FloatingResolved) => {
            setFloatingResolved(prev => {
              if (prev && prev.placement === resolved.placement && prev.blockSize === resolved.blockSize) {
                return prev
              }

              return resolved
            })
          }}
        >
          <Portal anchorRef={triggerRef} placement={floatingResolved?.placement || placement} offset={offset}>
            <Box
              tagAttrs={{
                role: 'tooltip',
                id: tooltipId,
                'aria-hidden': !open,
              }}
              drawable
              color={color}
              intent="neutral"
              variant="solid"
              pointerEvents="none"
              minInlineSize={`${minInlineSize}px`}
              maxInlineSize={`${maxInlineSize}px`}
            >
              <Box
                drawable
                variant={variant}
                intent={intent}
                color={color}
                padding={padding}
                paddingBlock={paddingBlock}
                paddingInline={paddingInline}
                textAlign={textAlign}
                blockSize="100%"
                inlineSize="100%"
              >
                <Text>{content}</Text>
              </Box>
            </Box>
          </Portal>
        </Floating>
      ) : null}
    </>
  )
}

Tooltip.displayName = 'Tooltip'
