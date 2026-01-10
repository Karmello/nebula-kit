import { useLayoutEffect, useEffect, useState } from 'react'

import { resolve } from './helpers'
import { FloatingProps, FloatingResult } from './definitions'

export const Floating = ({
  children,
  anchorRef,
  portalBlockSize,
  onResolve,
  placement,
  offset,
  viewportPadding,
}: FloatingProps) => {
  const [result, setResult] = useState<FloatingResult | null>(null)

  const props = { children, anchorRef, portalBlockSize, onResolve, placement, offset, viewportPadding }

  useLayoutEffect(() => {
    resolve(props, setResult)
  }, [resolve])

  useLayoutEffect(() => {
    if (result) {
      onResolve?.(result)
    }
  }, [result])

  useEffect(() => {
    const onResize = () => resolve(props, setResult)
    const onScroll = () => resolve(props, setResult)

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
