import { cloneElement, isValidElement, useId, useRef, useState } from 'react'

import { HtmlTagProps, Box, Floating, Portal, Measure } from 'lib/components'

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
  blockSize,
  color,
  inlineSize,
  intent = DEFAULT_TOOLTIP_INTENT,
  padding = DEFAULT_TOOLTIP_PADDING,
  paddingBlock,
  paddingInline,
  textAlign,
  // own
  content,
  placement = DEFAULT_TOOLTIP_PLACEMENT,
  offset = DEFAULT_TOOLTIP_OFFSET,
  variant = DEFAULT_TOOLTIP_VARIANT,
}: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const [openReason, setOpenReason] = useState<TooltipOpenReason | null>(null)

  const [resolvedPlacement, setResolvedPlacement] = useState<TooltipProps['placement']>(placement)
  const [resolvedSize, setResolvedSize] = useState<{ blockSize: number; inlineSize: number }>({
    blockSize: 0,
    inlineSize: 0,
  })

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
    const Content = (
      <Box
        tagAttrs={{ role: 'tooltip', id: tooltipId, 'aria-hidden': !open }}
        drawable
        pointerEvents="none"
        blockSize={blockSize}
        color={color}
        inlineSize={inlineSize}
        intent="neutral"
        variant="solid"
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
          {content}
        </Box>
      </Box>
    )

    return (
      <>
        <Measure
          onMeasure={({ blockSize, inlineSize }) => {
            setResolvedSize(prev => {
              if (prev && prev.blockSize === blockSize && prev.inlineSize === inlineSize) return prev
              return { blockSize, inlineSize }
            })
          }}
        >
          {Content}
        </Measure>
        {open ? (
          <Floating
            anchorRef={triggerRef}
            placement={placement}
            offset={offset}
            floatingBlockSize={resolvedSize.blockSize}
            floatingInlineSize={resolvedSize.inlineSize}
            onResolve={({ placement }) => {
              setResolvedPlacement(placement)
            }}
          >
            <Portal anchorRef={triggerRef} placement={resolvedPlacement} offset={offset}>
              {Content}
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
