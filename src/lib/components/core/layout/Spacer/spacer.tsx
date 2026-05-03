import classNames from 'classnames'

import { Box } from 'lib/components'
import { resolveSpacingValue, withPrefix } from 'lib/helpers'

import { SpacerProps, DEFAULT_SPACER_SIZE } from './definitions'

export const Spacer = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // own
  size = DEFAULT_SPACER_SIZE,
}: SpacerProps) => {
  const blockSize = resolveSpacingValue(size)

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
