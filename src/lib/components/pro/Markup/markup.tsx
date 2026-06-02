import { Box } from 'lib/components'

import { type MarkupProps } from './definitions'
import { transformChildren } from './helpers/transform-children'

export const Markup = ({
  // Box
  children,
  tagAttrs,
  tagRef,
}: MarkupProps) => {
  return (
    <Box tag="div" tagAttrs={tagAttrs} tagRef={tagRef}>
      {transformChildren(children)}
    </Box>
  )
}

Markup.displayName = 'Markup'
