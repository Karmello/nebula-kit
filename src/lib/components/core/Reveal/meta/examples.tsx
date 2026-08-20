import { Reveal } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { Box } from '../../Box'

export const REVEAL_EXAMPLES: Example[] = [
  {
    description: 'Default reveal with a label and content provided.',
    jsx: (
      <Reveal label="Label">
        <Box blockSize="80px" padding="20px">
          Content
        </Box>
      </Reveal>
    ),
  },
  {
    description: 'Disabled state of the Reveal.',
    jsx: (
      <Reveal label="Label" disabled>
        <Box blockSize="80px" padding="20px">
          Content
        </Box>
      </Reveal>
    ),
  },
]
