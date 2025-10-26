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
    let top = anchorRect.top + window.scrollY
    let left = anchorRect.left + window.scrollX
    if (placement === 'top') top -= rootRef.current.offsetHeight
    else if (placement === 'right') left += anchorRect.width
    else if (placement === 'bottom') top += anchorRect.height
    else if (placement === 'left') left -= rootRef.current.offsetWidth
    setPosition({ top, left })
  }, [])

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
  }, [])

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
