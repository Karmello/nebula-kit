import { Box } from 'lib/components/core/Box'

import { transformChildren } from './helpers/transform-children'
import { MarkupProps } from './types'

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
