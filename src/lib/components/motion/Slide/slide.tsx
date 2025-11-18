import { Box } from 'lib/components'

import { SlideProps } from './definitions'

export const Slide = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
}: SlideProps) => {
  return (
    <Box tagAttrs={tagAttrs} tagRef={tagRef}>
      {children}
    </Box>
  )
}

Slide.displayName = 'Slide'
