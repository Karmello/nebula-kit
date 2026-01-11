import { useLayoutEffect, useRef } from 'react'

import { Box } from 'lib/components'

import { MeasureProps, MeasuredInfo } from './definitions'

export const Measure = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  // own
  onMeasure,
}: MeasureProps) => {
  const localRef = useRef<HTMLDivElement | null>(null)
  const ref = tagRef || localRef

  const last = useRef<MeasuredInfo | null>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !onMeasure) return

    const measure = () => {
      const rect = el.getBoundingClientRect()

      const next = {
        blockSize: rect.height,
        inlineSize: rect.width,
      }

      // Prevent infinite loops / redundant reports
      if (
        !last.current ||
        last.current.blockSize !== next.blockSize ||
        last.current.inlineSize !== next.inlineSize
      ) {
        last.current = next
        onMeasure(next)
      }
    }

    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [onMeasure, ref])

  return (
    <Box
      tagRef={ref}
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          visibility: 'hidden',
        },
        'aria-hidden': true,
      }}
      position="absolute"
      top="0px"
      left="0px"
      pointerEvents="none"
    >
      {children}
    </Box>
  )
}

Measure.displayName = 'Measure'
