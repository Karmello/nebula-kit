import classNames from 'classnames'

import { Box } from 'lib/components'
import { resolveSpacingValue, withPrefix } from 'lib/helpers'

import { SpacerProps, DEFAULT_SPACER_BLOCK_SIZE } from './definitions'

export const Spacer = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // own
  blockSize = DEFAULT_SPACER_BLOCK_SIZE,
}: SpacerProps) => {
  const resolvedBlockSize = resolveSpacingValue(blockSize)

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('spacer'), tagAttrs?.className),
        role: 'presentation',
        'aria-hidden': 'true',
      }}
      tagRef={tagRef}
      blockSize={resolvedBlockSize}
    />
  )
}

Spacer.displayName = 'Spacer'
