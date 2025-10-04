import { useEffect, useRef } from 'react'

import { Box, BoxProps } from 'lib/components'

import { AnimateProps, DEFAULT_ANIMATE_DURATION } from './definitions'

export const Animate = ({
  tagAttrs,
  tagRef,
  children,
  property,
  visible,
  duration = DEFAULT_ANIMATE_DURATION,
}: AnimateProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const width = useRef<string>('')
  const height = useRef<string>('')

  useEffect(() => {
    width.current = `${tagRef ? tagRef.current?.scrollWidth : ref.current?.scrollWidth}px`
    height.current = `${tagRef ? tagRef.current?.scrollHeight : ref.current?.scrollHeight}px`
  }, [])

  const props: Partial<BoxProps> = {}

  if (property === 'blockSize') {
    props.blockSize = visible ? height.current : '0px'
    props.overflowY = 'hidden'
  } else if (property === 'inlineSize') {
    props.inlineSize = visible ? width.current : '0px'
    props.overflowX = 'hidden'
  }

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          transitionDuration: `${duration}ms`,
        },
      }}
      tagRef={tagRef || ref}
      overflowX="hidden"
      {...props}
    >
      {children}
    </Box>
  )
}
