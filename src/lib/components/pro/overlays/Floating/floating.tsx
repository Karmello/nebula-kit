import { useLayoutEffect, useEffect, useState } from 'react'

import { resolve } from './helpers'
import { FloatingProps, FloatingResolved } from './definitions'

export const Floating = ({
  children,
  anchorRef,
  portalBlockSize,
  onResolve,
  placement,
  offset,
  viewportPadding,
}: FloatingProps) => {
  const [resolved, setResolved] = useState<FloatingResolved | null>(null)

  const props = { children, anchorRef, portalBlockSize, onResolve, placement, offset, viewportPadding }

  useLayoutEffect(() => {
    resolve(props, setResolved)
  }, [resolve])

  useLayoutEffect(() => {
    if (resolved) {
      onResolve?.(resolved)
    }
  }, [resolved])

  useEffect(() => {
    const onResize = () => resolve(props, setResolved)
    const onScroll = () => resolve(props, setResolved)

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
