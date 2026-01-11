import { cloneElement, isValidElement, useRef, useState } from 'react'

import { HtmlTagProps, Box, Floating, Portal } from 'lib/components'

import {
  DEFAULT_TOOLTIP_INTENT,
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
  variant = DEFAULT_TOOLTIP_VARIANT,
}: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const [resolvedPlacement, setResolvedPlacement] = useState<TooltipProps['placement']>(placement)

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

  const Content = () => {
    if (!open) return null
    return (
      <Floating
        anchorRef={finalRef}
        placement={placement}
        offset={25}
        // floatingBlockSize={100}
        // floatingInlineSize={250}
        onResolve={({ placement }) => {
          setResolvedPlacement(placement)
        }}
      >
        <Portal anchorRef={finalRef} placement={resolvedPlacement} offset={25}>
          <Box
            tagAttrs={{
              role: 'tooltip',
            }}
            drawable
            pointerEvents="none"
            blockSize={blockSize}
            color={color}
            inlineSize={inlineSize}
            intent={intent}
            padding={padding}
            paddingBlock={paddingBlock}
            paddingInline={paddingInline}
            textAlign={textAlign}
            variant={variant}
          >
            {content}
          </Box>
        </Portal>
      </Floating>
    )
  }

  if (!isValidElement(children)) {
    return (
      <>
        <Box tag="span" tagAttrs={{ ...tagAttrs, onMouseEnter, onMouseLeave }} tagRef={finalRef}>
          {children}
        </Box>
        <Content />
      </>
    )
  }

  if (typeof children.type === 'string') {
    return (
      <>
        {cloneElement(children, { ...tagAttrs, ref: finalRef, onMouseEnter, onMouseLeave } as any)}
        <Content />
      </>
    )
  }

  return (
    <>
      {cloneElement(children, {
        tagAttrs: { ...tagAttrs, onMouseEnter, onMouseLeave },
        tagRef: finalRef,
      } as HtmlTagProps)}
      <Content />
    </>
  )
}

Tooltip.displayName = 'Tooltip'
