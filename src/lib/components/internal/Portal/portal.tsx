import { useLayoutEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_PORTAL_PLACEMENT, PortalProps } from './definitions'
import { useThemeContext } from '../../internal/ThemeProvider'
import { useBrandContext } from '../../internal/BrandProvider'

export const Portal = ({ children, tagRef, tagAttrs, anchorRef, placement = DEFAULT_PORTAL_PLACEMENT, offset }: PortalProps) => {
  // Holds the DOM node we render the portal into (appended to <body>)
  const [container, setContainer] = useState<HTMLElement | null>(null)

  // Stores computed absolute position in document space (not viewport)
  const [position, setPosition] = useState<{ top?: number; left?: number }>({})

  // Fallback ref if consumer didn't pass tagRef
  const ref = useRef<HTMLDivElement | null>(null)
  const rootRef = tagRef || ref

  // Tracks the current RAF id so we can cancel it on unmount
  const frameRef = useRef<number | null>(null)

  /**
   * Calculates portal position based on anchor's current layout.
   *
   * Important:
   * - Uses getBoundingClientRect() → gives viewport-relative position
   * - Converts to document coordinates via scroll offsets
   * - Does NOT use RAF internally (RAF is controlled by outer loop)
   */
  const updatePosition = useCallback(() => {
    if (!anchorRef?.current) return

    const anchorRect = anchorRef.current.getBoundingClientRect()

    // Convert viewport coords → document coords (because we use position: absolute)
    let top = anchorRect.top + window.scrollY
    let left = anchorRect.left + window.scrollX

    const [side, align] = (placement || 'bottom-start').split('-') as [string, string | undefined]

    // ---- Side positioning (which edge of anchor we attach to)
    if (side === 'bottom') top += anchorRect.height
    if (side === 'right') left += anchorRect.width

    // ---- Offset pushes portal away from anchor
    if (offset) {
      if (side === 'bottom') top += offset
      if (side === 'top') top -= offset
      if (side === 'right') left += offset
      if (side === 'left') left -= offset
    }

    // ---- Alignment along the cross axis
    if (side === 'top' || side === 'bottom') {
      if (align === 'center') left += anchorRect.width / 2
      if (align === 'end') left += anchorRect.width
    } else {
      if (align === 'center') top += anchorRect.height / 2
      if (align === 'end') top += anchorRect.height
    }

    // Avoid re-render if nothing changed (critical for RAF performance)
    setPosition(prev => {
      if (prev.top === top && prev.left === left) return prev
      return { top, left }
    })
  }, [anchorRef, placement, offset])

  /**
   * Creates a dedicated DOM node for this portal and attaches it to <body>.
   *
   * Why:
   * - Keeps portalled content outside normal stacking/context flow
   * - Avoids z-index and overflow issues from parent containers
   */
  useLayoutEffect(() => {
    const div = document.createElement('div')
    div.setAttribute('data-neb-portal', '')
    document.body.appendChild(div)
    setContainer(div)

    return () => {
      document.body.removeChild(div)
    }
  }, [])

  /**
   * RAF loop that continuously syncs portal position with anchor.
   *
   * Why RAF:
   * - Detects ALL movement (layout shifts, animations, DOM changes)
   * - Event-based approaches (resize/scroll) miss many real-world cases
   *
   * Safety:
   * - Runs only while Portal is mounted (i.e. visible)
   * - Cleanup cancels RAF → no memory leaks or background work
   */
  useLayoutEffect(() => {
    if (!anchorRef?.current) return

    let active = true

    const tick = () => {
      if (!active) return

      updatePosition()
      frameRef.current = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      active = false

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [anchorRef, updatePosition])

  const themeContext = useThemeContext()
  const brandContext = useBrandContext()

  if (!container) return null

  /**
   * Transform handles the "inverse alignment"
   *
   * Example:
   * - align="center" → we move anchor point to center
   * - transform pulls portal back by 50% of its own size
   *
   * This keeps positioning math simple and avoids measuring portal size.
   */
  let transform

  if (anchorRef?.current) {
    const [side, align] = (placement || 'bottom-start').split('-') as [string, string | undefined]
    const transforms: string[] = []

    // Flip relative to anchor edge
    if (side === 'top') transforms.push('translateY(-100%)')
    if (side === 'left') transforms.push('translateX(-100%)')

    // Cross-axis alignment correction
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

          // Disable transitions so position updates are immediate
          transition: 'none',

          // Transform is part of positioning system, not animation
          transform,
        },
      }}
      theme={themeContext?.theme}
      brand={brandContext?.brand}
      // Absolute positioning in document space (paired with scroll offsets above)
      position="absolute"
      zIndex={1000}
      pointerEvents="auto"
      // Position driven by RAF updates
      top={position.top !== undefined ? `${position.top}px` : undefined}
      left={position.left !== undefined ? `${position.left}px` : undefined}
    >
      {children}
    </Box>,
    container
  )
}

Portal.displayName = 'Portal'
