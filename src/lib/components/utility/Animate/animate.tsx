import { useEffect, useRef } from 'react'

import { Box } from 'lib/components'

import { AnimateProps, DEFAULT_ANIMATE_DURATION } from './definitions'

export const Animate = ({
  tagAttrs,
  tagRef,
  children,
  property,
  visible,
  calcSizeTrigger,
  duration = DEFAULT_ANIMATE_DURATION,
}: AnimateProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const finalRef = tagRef || ref

  const width = useRef<string>('')
  const height = useRef<string>('')

  useEffect(() => {
    width.current = `${finalRef.current?.scrollWidth || 0}px`
    height.current = `${finalRef.current?.scrollHeight || 0}px`
  }, [calcSizeTrigger])

  useEffect(() => {
    if (finalRef.current) {
      if (property === 'blockSize') {
        finalRef.current.style.blockSize = visible ? height.current : '0px'
        finalRef.current.style.overflowY = 'hidden'
      } else if (property === 'inlineSize') {
        finalRef.current.style.inlineSize = visible ? width.current : '0px'
        finalRef.current.style.overflowX = 'hidden'
      }
    }
  }, [visible])

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          transitionDuration: `${duration}ms`,
        },
      }}
      tagRef={finalRef}
      borderRadius={0}
    >
      {children}
    </Box>
  )
}
