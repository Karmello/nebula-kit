import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_RESIZE_DURATION, DEFAULT_RESIZE_EASING, ResizeProps } from './definitions'

export const Resize = ({
  tagAttrs,
  tagRef,
  children,
  property,
  visible,
  duration = DEFAULT_RESIZE_DURATION,
  easing = DEFAULT_RESIZE_EASING,
}: ResizeProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const finalRef = tagRef || ref

  const resolvedSizes = useRef<Record<ResizeProps['property'], string>>({ blockSize: '', inlineSize: '' })

  useEffect(() => {
    if (finalRef.current) {
      resolvedSizes.current.inlineSize = `${finalRef.current.scrollWidth}px`
      resolvedSizes.current.blockSize = `${finalRef.current.scrollHeight}px`
    }
  }, [finalRef.current])

  useEffect(() => {
    if (finalRef.current) {
      finalRef.current.style[property] = visible ? resolvedSizes.current[property] : '0px'
    }
  }, [visible])

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('resize'), tagAttrs?.className || ''),
        style: {
          ...tagAttrs?.style,
          transitionDuration: duration !== undefined ? `${duration}ms` : undefined,
          transitionTimingFunction: easing,
        },
      }}
      tagRef={finalRef}
      borderRadius={0}
      overflowX="hidden"
      overflowY="hidden"
    >
      {children}
    </Box>
  )
}

Resize.displayName = 'Resize'
