import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_SPACER_BLOCK_SIZE, SpacerProps } from './definitions'

export const Spacer = ({ tagAttrs, tagRef, blockSize = DEFAULT_SPACER_BLOCK_SIZE }: SpacerProps) => {
  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('spacer'), tagAttrs?.className),
        role: 'presentation',
        'aria-hidden': 'true',
      }}
      tagRef={tagRef}
      variant="ghost"
      blockSize={blockSize}
    />
  )
}

Spacer.displayName = 'Spacer'
