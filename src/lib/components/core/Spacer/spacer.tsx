import { Box } from '../Box'
import { DEFAULT_SPACER_BLOCK_SIZE, type SpacerProps } from './definitions'

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
