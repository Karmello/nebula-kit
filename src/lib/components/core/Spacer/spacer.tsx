import { Box } from '../Box'
import { DEFAULT_SPACER_BLOCK_SIZE } from './constants'
import { type SpacerProps } from './types'

export const Spacer = ({
  // Box
  elemRef,
  elemAttrs,
  blockSize = DEFAULT_SPACER_BLOCK_SIZE,
}: SpacerProps) => {
  return (
    <Box
      elemRef={elemRef}
      elemAttrs={{
        ...elemAttrs,
        role: 'presentation',
        'aria-hidden': 'true',
      }}
      blockSize={blockSize}
    />
  )
}

Spacer.displayName = 'Spacer'
