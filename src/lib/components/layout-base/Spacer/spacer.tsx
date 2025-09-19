import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_SPACER_BLOCK_SIZE, SpacerProps } from './definitions'

export const Spacer = ({ elemProps, elemRef, blockSize = DEFAULT_SPACER_BLOCK_SIZE }: SpacerProps) => {
  return (
    <Box
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('spacer'), elemProps?.className),
        role: 'presentation',
        'aria-hidden': 'true',
      }}
      elemRef={elemRef}
      variant="ghost"
      blockSize={blockSize}
    />
  )
}

Spacer.displayName = 'Spacer'
