import { cloneElement, isValidElement, useId, useRef, useState } from 'react'

import { HtmlTagProps, Box, Floating, FloatingResolved, Portal, Text } from 'lib/components'

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
  const localTagRef = useRef(null)
  const triggerRef = tagRef || localTagRef

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

  const ContentWrapper = () => {
    const Content = () => (
      <Box
        tagAttrs={{ role: 'tooltip', id: tooltipId, 'aria-hidden': !open }}
        drawable
        color={color}
        intent="neutral"
        variant="solid"
        pointerEvents="none"
        maxInlineSize={
          floatingResolved
            ? maxInlineSize
              ? `min(${floatingResolved.availableInlineSize}px, ${maxInlineSize})`
              : `${floatingResolved.availableInlineSize}px`
            : maxInlineSize
        }
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
    )

    return (
      <>
        {open ? (
          <Floating
            anchorRef={triggerRef}
            placement={placement}
            flipThresholdRatio={0.5}
            offset={offset}
            onResolve={(resolved: FloatingResolved) => {
              setFloatingResolved(prev => {
                if (
                  prev &&
                  prev.placement === resolved.placement &&
                  prev.blockSize === resolved.blockSize &&
                  prev.availableBlockSize === resolved.availableBlockSize &&
                  prev.availableInlineSize === resolved.availableInlineSize
                ) {
                  return prev
                }

                return resolved
              })
            }}
          >
            <Portal
              anchorRef={triggerRef}
              placement={floatingResolved?.placement || placement}
              offset={offset}
            >
              <Content />
            </Portal>
          </Floating>
        ) : null}
      </>
    )
  }

  if (!isValidElement(children)) {
    return (
      <>
        <Box
          tag="span"
          tagAttrs={{ ...tagAttrs, ...eventHandlers, 'aria-describedby': open ? tooltipId : undefined }}
          tagRef={triggerRef}
          display="inline-block"
        >
          {children}
        </Box>
        <ContentWrapper />
      </>
    )
  }

  if (typeof children.type === 'string') {
    return (
      <>
        {cloneElement(children, {
          ...tagAttrs,
          ref: triggerRef,
          ...eventHandlers,
          'aria-describedby': open ? tooltipId : undefined,
        } as any)}
        <ContentWrapper />
      </>
    )
  }

  return (
    <>
      {cloneElement(children, {
        tagAttrs: { ...tagAttrs, ...eventHandlers, 'aria-describedby': open ? tooltipId : undefined },
        tagRef: triggerRef,
      } as HtmlTagProps)}
      <ContentWrapper />
    </>
  )
}

Tooltip.displayName = 'Tooltip'
