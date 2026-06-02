import { Box } from 'lib/index.core'
import { MarkupProps } from 'lib/index.pro'

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
