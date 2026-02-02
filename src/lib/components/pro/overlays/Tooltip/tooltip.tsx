import { cloneElement, isValidElement, useId, useRef, useState } from 'react'

import { Box, Floating, FloatingResolved, Portal, Text } from 'lib/components'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_OFFSET,
  DEFAULT_TOOLTIP_PADDING,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
  TooltipInputModality,
  TooltipOpenReason,
  TooltipProps,
} from './definitions'

let lastInputModality: TooltipInputModality = null
const getLastInputModality = () => lastInputModality

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Tab') lastInputModality = 'keyboard'
}
const onMouseDown = () => {
  lastInputModality = 'mouse'
}
if (typeof document !== 'undefined') {
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('mousedown', onMouseDown)
}

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
  offset = DEFAULT_TOOLTIP_OFFSET,
  variant = DEFAULT_TOOLTIP_VARIANT,
}: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const [openReason, setOpenReason] = useState<TooltipOpenReason | null>(null)

  const [floatingResolved, setFloatingResolved] = useState<FloatingResolved>()

  const dismissedByEsc = useRef(false)
  const localRef = useRef(null)
  const triggerRef = tagRef || localRef

  const tooltipId = useId()

  const eventHandlers = {
    onMouseEnter: () => {
      if (!open) {
        setOpen(true)
        setOpenReason('mouse')
      }
    },
    onMouseLeave: () => {
      setOpen(false)
      setOpenReason(null)
    },
    onFocus: () => {
      if (getLastInputModality() === 'keyboard' && !dismissedByEsc.current) {
        setOpen(true)
        setOpenReason('keyboard')
      }
    },
    onBlur: () => {
      dismissedByEsc.current = false
      setOpen(false)
      setOpenReason(null)
    },
    onKeyDown: (e: { key: string }) => {
      if (e.key === 'Escape' && open && openReason === 'keyboard') {
        dismissedByEsc.current = true
        setOpen(false)
        setOpenReason(null)
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
              tagAttrs={{ role: 'tooltip', id: tooltipId, 'aria-hidden': !open }}
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
