import { useLayoutEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_PORTAL_PLACEMENT, PortalProps } from './definitions'
import { useThemeContext, useBrandContext } from '../../internal'

export const Portal = ({ children, tagRef, tagAttrs, anchorRef, placement = DEFAULT_PORTAL_PLACEMENT, offset }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [position, setPosition] = useState<{ top?: number; left?: number }>({
    top: undefined,
    left: undefined,
  })

  const ref = useRef<HTMLDivElement | null>(null)
  const rootRef = tagRef || ref

  const updatePosition = useCallback(() => {
    if (!anchorRef?.current) return

    // Wrapping measurements in rAF ensures we aren't fighting the browser's
    // render cycle, preventing the "ResizeObserver loop limit exceeded" error.
    requestAnimationFrame(() => {
      if (!anchorRef.current) return

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

      setPosition(prev => {
        if (prev.top === top && prev.left === left) return prev
        return { top, left }
      })
    })
  }, [placement, anchorRef, offset])

  // Create portal container
  useLayoutEffect(() => {
    const div = document.createElement('div')
    div.setAttribute('data-neb-portal', '')
    document.body.appendChild(div)
    setContainer(div)

    return () => {
      document.body.removeChild(div)
    }
  }, [])

  // Optimized Position tracking
  useLayoutEffect(() => {
    if (!anchorRef?.current) return

    // 1. Initial position
    updatePosition()

    // 2. ResizeObserver handles window resize AND anchor size changes.
    // This is much more efficient than a 'resize' event listener.
    const observer = new ResizeObserver(updatePosition)
    observer.observe(anchorRef.current)

    // Also observe the body to catch layout shifts from other components
    observer.observe(document.body)

    // 3. Passive scroll listener allows the page to scroll smoothly
    // without waiting for the JS execution.
    window.addEventListener('scroll', updatePosition, { capture: true, passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updatePosition, { capture: true })
    }
  }, [anchorRef, updatePosition])

  const themeContext = useThemeContext()
  const brandContext = useBrandContext()

  if (!container) return null

  let transform

  if (anchorRef?.current) {
    const [side, align] = (placement || 'bottom-start').split('-') as [string, string | undefined]
    const transforms: string[] = []

    if (side === 'top') transforms.push('translateY(-100%)')
    if (side === 'left') transforms.push('translateX(-100%)')

    if ((side === 'top' || side === 'bottom') && align === 'center') transforms.push('translateX(-50%)')
    if ((side === 'top' || side === 'bottom') && align === 'end') transforms.push('translateX(-100%)')
    if ((side === 'left' || side === 'right') && align === 'center') transforms.push('translateY(-50%)')
    if ((side === 'left' || side === 'right') && align === 'end') transforms.push('translateY(-100%)')

    transform = transforms.join(' ')
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
