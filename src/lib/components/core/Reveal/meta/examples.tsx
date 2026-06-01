import { ComponentMeta } from 'client/definitions'

import { type RevealProps } from '../definitions'
import { Reveal } from '../reveal'
import { Box } from '../../Box'

const REVEAL_EXAMPLES_META: ComponentMeta<RevealProps>['examples'] = [
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

export { REVEAL_EXAMPLES_META }
