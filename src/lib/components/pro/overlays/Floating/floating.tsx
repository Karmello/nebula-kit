import { useLayoutEffect, useEffect, useState, useCallback } from 'react'

import { DEFAULT_PORTAL_PLACEMENT } from 'lib/components/core/utility/Portal'

import {
  DEFAULT_FLOATING_OFFSET,
  DEFAULT_FLOATING_PLACEMENT,
  DEFAULT_FLOATING_VIEWPORT_PADDING,
  FloatingProps,
  FloatingResult,
} from './definitions'

const resolveCssValue = (value: string): number => {
  if (!value) return 0

  const el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.visibility = 'hidden'
  el.style.pointerEvents = 'none'
  el.style.width = value

  document.body.appendChild(el)
  const px = parseFloat(getComputedStyle(el).width)
  document.body.removeChild(el)

  return Number.isFinite(px) ? px : 0
}

export const Floating = ({
  anchorRef,
  children,
  disabled,
  placement = DEFAULT_FLOATING_PLACEMENT,
  offset = DEFAULT_FLOATING_OFFSET,
  viewportPadding = DEFAULT_FLOATING_VIEWPORT_PADDING,
}: FloatingProps) => {
  const [result, setResult] = useState<FloatingResult | null>(null)

  const resolve = useCallback(() => {
    if (disabled) return
    if (!anchorRef?.current) return

    const anchorRect = anchorRef.current.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    const offsetPx = resolveCssValue(offset)
    const viewportPaddingPx = resolveCssValue(viewportPadding)

    const resolvedPlacement = placement === 'auto' ? 'bottom-start' : placement

    let maxHeight: number | undefined

    if (resolvedPlacement.startsWith('bottom')) {
      const available = viewportHeight - anchorRect.bottom - viewportPaddingPx
      maxHeight = Math.max(0, available - offsetPx)
    }

    if (resolvedPlacement.startsWith('top')) {
      const available = anchorRect.top - viewportPaddingPx
      maxHeight = Math.max(0, available - offsetPx)
    }

    setResult({
      placement: resolvedPlacement,
      style: maxHeight !== undefined ? { maxHeight } : undefined,
    })
  }, [disabled, placement, offset, viewportPadding, anchorRef])

  useLayoutEffect(() => {
    resolve()
  }, [resolve])

  useEffect(() => {
    if (disabled) return

    const onResize = () => resolve()
    const onScroll = () => resolve()

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, true)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [disabled, resolve])

  if (!children) return null

  // Passthrough mode
  if (disabled) {
    return children({
      placement: placement === 'auto' ? DEFAULT_PORTAL_PLACEMENT : placement,
    })
  }

  if (!result) return null

  return children(result)
}

Floating.displayName = 'Floating'
