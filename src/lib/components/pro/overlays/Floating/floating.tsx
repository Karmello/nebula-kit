import { useCallback, useEffect } from 'react'

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
  const resolve = useCallback(() => {
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

    onResolve?.(next)
  }, [
    anchorRef.current,
    mode,
    placement,
    offset,
    viewportPadding,
    floatingBlockSize,
    minInlineSize,
    maxInlineSize,
    onResolve,
  ])

  useEffect(() => {
    resolve()

    const onResize = () => resolve()
    const onScroll = () => resolve()

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, true)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [resolve])

  return children
}

Floating.displayName = 'Floating'
