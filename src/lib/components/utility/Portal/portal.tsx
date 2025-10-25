import { useLayoutEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'

import { Box } from 'lib/components'

import { DEFAULT_PORTAL_PLACEMENT, PortalProps } from './definitions'

export const Portal = ({ children, anchorRef, placement = DEFAULT_PORTAL_PLACEMENT }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [position, setPosition] = useState<{ top?: number; left?: number }>({
    top: undefined,
    left: undefined,
  })
  const contentRef = useRef<HTMLDivElement | null>(null)

  const updatePosition = useCallback(() => {
    if (!anchorRef.current || !contentRef.current) return
    const anchorRect = anchorRef.current.getBoundingClientRect()
    let top = anchorRect.top + window.scrollY
    let left = anchorRect.left + window.scrollX
    if (placement === 'top') top -= contentRef.current.offsetHeight
    else if (placement === 'right') left += anchorRect.width
    else if (placement === 'bottom') top += anchorRect.height
    else if (placement === 'left') left -= contentRef.current.offsetWidth
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
      tagRef={contentRef}
      tagAttrs={{ style: { transition: 'none' } }}
      position="absolute"
      zIndex={1000}
      top={position.top !== undefined ? position.top + 'px' : undefined}
      left={position.left !== undefined ? position.left + 'px' : undefined}
    >
      {children}
    </Box>,
    container
  )
}

Portal.displayName = 'Portal'
