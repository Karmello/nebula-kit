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
}: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [position, setPosition] = useState<{ top?: number; left?: number }>({
    top: undefined,
    left: undefined,
  })

  const ref = useRef<HTMLDivElement | null>(null)
  const rootRef = tagRef || ref

  const updatePosition = useCallback(() => {
    if (!anchorRef.current) return
    const anchorRect = anchorRef.current.getBoundingClientRect()

    let top = anchorRect.top + window.scrollY
    let left = anchorRect.left + window.scrollX

    // Split placement into main side and alignment part
    const [side, align] = (placement || 'bottom-start').split('-') as [string, string | undefined]

    // Base position derived purely from anchor geometry
    if (side === 'bottom') top += anchorRect.height
    if (side === 'right') left += anchorRect.width

    // Alignment adjustments (still only based on anchor)
    if (side === 'top' || side === 'bottom') {
      if (align === 'center') left += anchorRect.width / 2
      if (align === 'end') left += anchorRect.width
    } else if (side === 'left' || side === 'right') {
      if (align === 'center') top += anchorRect.height / 2
      if (align === 'end') top += anchorRect.height
    }

    setPosition({ top, left })
  }, [placement, anchorRef])

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
    return () => cancelAnimationFrame(frame)
  }, [updatePosition])

  if (!container) return null

  // Compute transform purely by placement intent (handles all alignment offsets)
  const [side, align] = (placement || 'bottom-start').split('-') as [string, string | undefined]
  const transforms: string[] = []

  // Pull back based on side
  if (side === 'top') transforms.push('translateY(-100%)')
  if (side === 'left') transforms.push('translateX(-100%)')

  // Alignments
  if ((side === 'top' || side === 'bottom') && align === 'center') transforms.push('translateX(-50%)')
  if ((side === 'top' || side === 'bottom') && align === 'end') transforms.push('translateX(-100%)')
  if ((side === 'left' || side === 'right') && align === 'center') transforms.push('translateY(-50%)')
  if ((side === 'left' || side === 'right') && align === 'end') transforms.push('translateY(-100%)')

  const finalTransform = transforms.join(' ')

  return createPortal(
    <Box
      tagRef={rootRef}
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          transition: 'none',
          transform: finalTransform,
        },
      }}
      position="absolute"
      zIndex={1000}
      top={position.top !== undefined ? `${position.top}px` : undefined}
      left={position.left !== undefined ? `${position.left}px` : undefined}
    >
      {children}
    </Box>,
    container
  )
}

Portal.displayName = 'Portal'
