import { useLayoutEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'

import { Box } from 'lib/components'

import { DEFAULT_PORTAL_PLACEMENT, PortalProps } from './definitions'

export const Portal = ({
  // HtmlTag
  children,
  tagRef,
  tagAttrs,
  // own
  anchorRef,
  placement = DEFAULT_PORTAL_PLACEMENT,
  inlineSize,
}: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [position, setPosition] = useState<{ top?: number; left?: number }>({
    top: undefined,
    left: undefined,
  })

  const ref = useRef<HTMLDivElement | null>(null)
  const rootRef = tagRef || ref

  const updatePosition = useCallback(() => {
    if (!anchorRef.current || !rootRef.current) return
    const anchorRect = anchorRef.current.getBoundingClientRect()
    const rootEl = rootRef.current

    let top = anchorRect.top + window.scrollY
    let left = anchorRect.left + window.scrollX

    // Split placement into main side and alignment part
    // e.g. "bottom-end" → side="bottom", align="end"
    const [side, align] = (placement || 'bottom-start').split('-') as [string, string | undefined]

    // Vertical placement
    if (side === 'top') {
      top -= rootEl.offsetHeight
    } else if (side === 'bottom') {
      top += anchorRect.height
    }

    // Horizontal placement
    if (side === 'left') {
      left -= rootEl.offsetWidth
    } else if (side === 'right') {
      left += anchorRect.width
    }

    // Horizontal alignment
    if (side === 'top' || side === 'bottom') {
      if (align === 'end') {
        // Align dropdown’s right edge to anchor’s right edge
        left += anchorRect.width - rootEl.offsetWidth
      } else if (align === 'center') {
        // Center horizontally
        left += (anchorRect.width - rootEl.offsetWidth) / 2
      }
    }

    // Vertical alignment
    if (side === 'left' || side === 'right') {
      if (align === 'end') {
        // Align dropdown’s bottom edge to anchor’s bottom edge
        top += anchorRect.height - rootEl.offsetHeight
      } else if (align === 'center') {
        // Center vertically
        top += (anchorRect.height - rootEl.offsetHeight) / 2
      }
    }

    setPosition({ top, left })
  }, [placement, anchorRef, rootRef])

  useLayoutEffect(() => {
    const div = document.createElement('div')
    div.setAttribute('data-neb-portal', '')
    document.body.appendChild(div)
    setContainer(div)
    return () => {
      document.body.removeChild(div)
    }
  }, [])

  useLayoutEffect(() => {
    let frame: number
    const callback = () => {
      updatePosition()
      frame = requestAnimationFrame(callback)
    }
    frame = requestAnimationFrame(callback)
    return () => {
      cancelAnimationFrame(frame)
    }
  }, [updatePosition])

  if (!container) {
    return null
  }

  return createPortal(
    <Box
      tagRef={rootRef}
      tagAttrs={{
        ...tagAttrs,
        style: { ...tagAttrs?.style, transition: 'none' },
      }}
      position="absolute"
      zIndex={1000}
      inlineSize={inlineSize}
      top={position.top !== undefined ? position.top + 'px' : undefined}
      left={position.left !== undefined ? position.left + 'px' : undefined}
    >
      {children}
    </Box>,
    container
  )
}

Portal.displayName = 'Portal'
