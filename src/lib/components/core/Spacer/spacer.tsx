import { Box } from '../Box'
import { DEFAULT_SPACER_BLOCK_SIZE } from './constants'
import { type SpacerProps } from './types'

export const Spacer = ({
  // Box
  tagRef,
  tagAttrs,
  blockSize = DEFAULT_SPACER_BLOCK_SIZE,
}: SpacerProps) => {
  return (
    <Box
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        role: 'presentation',
        'aria-hidden': 'true',
      }}
      blockSize={blockSize}
    />
  )
}

Spacer.displayName = 'Spacer'
