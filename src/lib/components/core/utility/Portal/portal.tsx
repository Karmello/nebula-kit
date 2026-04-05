import { useLayoutEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_PORTAL_PLACEMENT, PortalProps } from './definitions'
import { useThemeContext, useBrandContext } from '../../internal'

export const Portal = ({
  // HtmlTag
  children,
  tagRef,
  tagAttrs,
  // own
  anchorRef,
  placement = DEFAULT_PORTAL_PLACEMENT,
  offset,
}: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [position, setPosition] = useState<{ top?: number; left?: number }>({
    top: undefined,
    left: undefined,
  })

  const ref = useRef<HTMLDivElement | null>(null)
  const rootRef = tagRef || ref

  const updatePosition = useCallback(() => {
    if (!anchorRef?.current) return false

    const anchorRect = anchorRef.current.getBoundingClientRect()

    let top = anchorRect.top + window.scrollY
    let left = anchorRect.left + window.scrollX

    const [side, align] = (placement || 'bottom-start').split('-') as [string, string | undefined]

    if (side === 'bottom') top += anchorRect.height
    if (side === 'right') left += anchorRect.width

    if (offset) {
      if (side === 'bottom') top += offset
      if (side === 'top') top -= offset
      if (side === 'right') left += offset
      if (side === 'left') left -= offset
    }

    if (side === 'top' || side === 'bottom') {
      if (align === 'center') left += anchorRect.width / 2
      if (align === 'end') left += anchorRect.width
    } else {
      if (align === 'center') top += anchorRect.height / 2
      if (align === 'end') top += anchorRect.height
    }

    let changed = false

    setPosition(prev => {
      if (prev.top === top && prev.left === left) return prev
      changed = true
      return { top, left }
    })

    return changed
  }, [placement, anchorRef, offset])

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
    if (!anchorRef?.current) return
    let frame: number
    const callback = () => {
      updatePosition()
      frame = requestAnimationFrame(callback)
    }
    frame = requestAnimationFrame(callback)
    return () => cancelAnimationFrame(frame)
  }, [updatePosition])

  const themeContext = useThemeContext()
  const brandContext = useBrandContext()

  if (!container) return null

  let transform

  if (anchorRef?.current) {
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

    transform = transforms.join(' ')
  }

  if (!anchorRef?.current) {
    return createPortal(
      <Box
        tagRef={rootRef}
        tagAttrs={{
          ...tagAttrs,
          className: classNames(withPrefix('portal'), tagAttrs?.className),
        }}
        theme={themeContext?.theme}
        brand={brandContext?.brand}
      >
        {children}
      </Box>,
      container
    )
  }

  return createPortal(
    <Box
      tagRef={rootRef}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('portal'), tagAttrs?.className),
        style: {
          ...tagAttrs?.style,
          transition: 'none',
          transform,
        },
      }}
      theme={themeContext?.theme}
      brand={brandContext?.brand}
      position="absolute"
      zIndex={1000}
      pointerEvents="auto"
      top={position.top !== undefined ? `${position.top}px` : undefined}
      left={position.left !== undefined ? `${position.left}px` : undefined}
    >
      {children}
    </Box>,
    container
  )
}

Portal.displayName = 'Portal'
