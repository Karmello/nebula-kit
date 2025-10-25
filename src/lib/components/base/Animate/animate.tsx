import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AnimateProps } from './definitions'

export const Animate = ({ tagAttrs, tagRef, children, property, visible, duration }: AnimateProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const finalRef = tagRef || ref

  const resolvedSizes = useRef<Record<AnimateProps['property'], string>>({ blockSize: '', inlineSize: '' })

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
        className: classNames(withPrefix('animate'), tagAttrs?.className || ''),
        style: {
          ...tagAttrs?.style,
          transitionDuration: duration ? `${duration}ms` : undefined,
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
