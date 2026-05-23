import { Box } from 'lib/components'

import { transformChildren } from './helpers/transform-children'
import { type MarkupProps } from './definitions'

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
