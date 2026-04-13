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

  const rafRef = useRef<number | null>(null)

  const updatePosition = useCallback(() => {
    if (!anchorRef?.current) return

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
  }, [placement, anchorRef, offset])

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return

    rafRef.current = requestAnimationFrame(() => {
      updatePosition()
      rafRef.current = null
    })
  }, [updatePosition])

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

  // Position tracking (event-driven)
  useLayoutEffect(() => {
    if (!anchorRef?.current) return

    let raf: number | null = null
    let timeout: number | null = null

    const startTracking = () => {
      if (raf !== null) return

      const loop = () => {
        updatePosition()
        raf = requestAnimationFrame(loop)
      }

      raf = requestAnimationFrame(loop)
    }

    const stopTracking = () => {
      if (raf !== null) {
        cancelAnimationFrame(raf)
        raf = null
      }
    }

    const handleActivity = () => {
      startTracking()

      if (timeout !== null) {
        clearTimeout(timeout)
      }

      // stop after activity settles
      timeout = window.setTimeout(() => {
        stopTracking()
      }, 120) // tweak: 100–200ms sweet spot
    }

    // initial position
    updatePosition()

    // listeners
    window.addEventListener('resize', handleActivity)
    window.addEventListener('scroll', handleActivity, true)

    // also observe anchor size
    const observer = new ResizeObserver(handleActivity)
    observer.observe(anchorRef.current)

    return () => {
      stopTracking()

      if (timeout !== null) {
        clearTimeout(timeout)
      }

      window.removeEventListener('resize', handleActivity)
      window.removeEventListener('scroll', handleActivity, true)
      observer.disconnect()
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
