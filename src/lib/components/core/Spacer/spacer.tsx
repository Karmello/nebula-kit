import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SpacerProps, DEFAULT_SPACER_BLOCK_SIZE } from './definitions'

export const Spacer = ({
  // Box
  tagAttrs,
  tagRef,
  blockSize = DEFAULT_SPACER_BLOCK_SIZE,
}: SpacerProps) => {
  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('spacer'), tagAttrs?.className),
        role: 'presentation',
        'aria-hidden': 'true',
      }}
      tagRef={tagRef}
      blockSize={blockSize}
    />
  )
}

Spacer.displayName = 'Spacer'
