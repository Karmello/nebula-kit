import { useEffect, useState } from 'react'

import { resolveFitStrategy, resolveProjectStrategy } from './strategies'
import { DEFAULT_FLOATING_PLACEMENT, FloatingProps, FloatingResolved } from './definitions'

export function Floating({
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
}: FloatingProps) {
  const [resolved, setResolved] = useState<FloatingResolved | null>(null)

  // re-resolve on viewport changes
  useEffect(() => {
    const resolve = () => {
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

      setResolved(prev => {
        if (prev && prev.placement === next.placement && prev.blockSize === next.blockSize) {
          return prev
        }
        return next
      })
    }

    window.addEventListener('resize', resolve)
    window.addEventListener('scroll', resolve, true)

    if (!resolved) {
      resolve()
    }

    return () => {
      window.removeEventListener('resize', resolve)
      window.removeEventListener('scroll', resolve, true)
    }
  }, [mode, placement, floatingBlockSize, maxInlineSize, minInlineSize, offset, viewportPadding])

  // notify consumer
  useEffect(() => {
    if (resolved) {
      onResolve?.(resolved)
    }
  }, [resolved])

  return children
}

Floating.displayName = 'Floating'
