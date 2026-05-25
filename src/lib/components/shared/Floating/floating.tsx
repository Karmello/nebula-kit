import { useCallback, useEffect, useRef } from 'react'

import { resolveFitStrategy, resolveProjectStrategy } from './strategies'
import { DEFAULT_FLOATING_PLACEMENT, FloatingProps } from './definitions'

export const Floating = ({
  children,
  anchorRef,
  mode,
  placement = DEFAULT_FLOATING_PLACEMENT,
  floatingBlockSize,
  maxInlineSize,
  minInlineSize,
  offset,
  viewportPadding,
  onResolve,
}: FloatingProps) => {
  const lastRef = useRef<any>(null)
  const scrollFrameRef = useRef<number | null>(null)

  const resolve = useCallback(() => {
    const anchor = anchorRef.current
    if (!anchor) return

    const next =
      mode === 'fit-x' || mode === 'fit-y'
        ? resolveFitStrategy({
            anchorRef,
            mode,
            placement,
            offset,
            viewportPadding,
            floatingBlockSize,
          })
        : resolveProjectStrategy({
            anchorRef,
            mode,
            placement,
            offset,
            viewportPadding,
            minInlineSize: minInlineSize as never,
            maxInlineSize: maxInlineSize as never,
          })

    const prev = lastRef.current

    const isSame = prev && prev.placement === next.placement && prev.blockSize === next.blockSize

    if (!isSame) {
      lastRef.current = next
      onResolve?.(next)
    }
  }, [anchorRef, mode, placement, offset, viewportPadding, floatingBlockSize, minInlineSize, maxInlineSize, onResolve])

  useEffect(() => {
    const anchor = anchorRef.current
    if (!anchor) return

    // initial resolve
    resolve()

    // ResizeObserver (post-layout safe)
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(resolve)
    })

    resizeObserver.observe(anchor)

    // scroll → RAF throttled
    const onScroll = () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current)
      }

      scrollFrameRef.current = requestAnimationFrame(() => {
        resolve()
      })
    }

    window.addEventListener('scroll', onScroll, true)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', onScroll, true)

      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current)
      }
    }
  }, [anchorRef, resolve])

  return children
}

Floating.displayName = 'Floating'
