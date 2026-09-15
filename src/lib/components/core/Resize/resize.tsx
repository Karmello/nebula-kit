import { useEffect, useRef } from 'react'

import { Box } from '../Box'
import {
  buildSizeTransition,
  MeasuredSizes,
  syncMeasuredSize,
  syncResizeVisibility,
} from './helpers'
import type { ResizeProps } from './types'

export const DEFAULT_RESIZE_DURATION: ResizeProps['duration'] = 200
export const DEFAULT_RESIZE_EASING: ResizeProps['easing'] = 'linear'

export const Resize = ({
  tagAttrs,
  tagRef,
  children,
  property,
  visible,
  duration = DEFAULT_RESIZE_DURATION,
  easing = DEFAULT_RESIZE_EASING,
}: ResizeProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const finalRef = tagRef || containerRef

  const sizes = useRef<MeasuredSizes>({ blockSize: '', inlineSize: '' })

  const transitionStyle = buildSizeTransition({ duration, easing })

  useEffect(() => {
    const container = finalRef.current
    const content = contentRef.current

    if (!container || !content) return

    const update = () => {
      syncMeasuredSize({
        container,
        content,
        property,
        visible,
        sizes: sizes.current,
      })
    }

    update()

    const observer = new ResizeObserver(update)
    observer.observe(content)

    return () => observer.disconnect()
  }, [finalRef, property, visible])

  useEffect(() => {
    const container = finalRef.current

    if (!container) return

    syncResizeVisibility({
      container,
      property,
      visible,
      sizes: sizes.current,
    })
  }, [finalRef, visible, property])

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        inert: !visible,
        style: {
          ...tagAttrs?.style,
          ...transitionStyle,
        },
      }}
      tagRef={finalRef}
      overflow="hidden"
    >
      <Box tagRef={contentRef}>{children}</Box>
    </Box>
  )
}

Resize.displayName = 'Resize'
