import { cloneElement, isValidElement, useRef, useState } from 'react'

import { HtmlTagProps, Box, Floating, Portal, Measure } from 'lib/components'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_OFFSET,
  DEFAULT_TOOLTIP_PADDING,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
  TooltipProps,
} from './definitions'

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
  const [resolvedPlacement, setResolvedPlacement] = useState<TooltipProps['placement']>(placement)
  const [resolvedSize, setResolvedSize] = useState<{ blockSize: number; inlineSize: number }>({
    blockSize: 0,
    inlineSize: 0,
  })

  const ref = useRef(null)
  const finalRef = tagRef || ref

  const closeTimeout = useRef<number | null>(null)

  const onMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setOpen(true)
  }

  const onMouseLeave = () => {
    closeTimeout.current = window.setTimeout(() => {
      setOpen(false)
    }, 100)
  }

  const ContentWrapper = () => {
    const Content = (
      <Box
        tagAttrs={{ role: 'tooltip' }}
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
            anchorRef={finalRef}
            placement={placement}
            offset={offset}
            floatingBlockSize={resolvedSize.blockSize}
            floatingInlineSize={resolvedSize.inlineSize}
            onResolve={({ placement }) => {
              setResolvedPlacement(placement)
            }}
          >
            <Portal anchorRef={finalRef} placement={resolvedPlacement} offset={offset}>
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
        <Box tag="span" tagAttrs={{ ...tagAttrs, onMouseEnter, onMouseLeave }} tagRef={finalRef}>
          {children}
        </Box>
        <ContentWrapper />
      </>
    )
  }

  if (typeof children.type === 'string') {
    return (
      <>
        {cloneElement(children, { ...tagAttrs, ref: finalRef, onMouseEnter, onMouseLeave } as any)}
        <ContentWrapper />
      </>
    )
  }

  return (
    <>
      {cloneElement(children, {
        tagAttrs: { ...tagAttrs, onMouseEnter, onMouseLeave },
        tagRef: finalRef,
      } as HtmlTagProps)}
      <ContentWrapper />
    </>
  )
}

Tooltip.displayName = 'Tooltip'
