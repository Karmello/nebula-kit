import { Box } from 'lib/components/core/Box'

import { transformChildren } from './helpers/transform-children'
import { MarkupProps } from './types'

export const Markup = ({
  // Box
  children,
  elemAttrs,
  elemRef,
}: MarkupProps) => {
  return (
    <Box elemTag="div" elemAttrs={elemAttrs} elemRef={elemRef}>
      {transformChildren(children)}
    </Box>
  )
}

Markup.displayName = 'Markup'
