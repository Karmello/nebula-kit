import { ComponentMeta } from 'client/definitions'
import { Box, Reveal, RevealProps } from 'lib/components'

const REVEAL_EXAMPLES_META: ComponentMeta<RevealProps>['examples'] = [
  {
    description: 'Default reveal with a label and content provided.',
    jsx: (
      <Reveal label="Label">
        <Box blockSize={80} padding={20}>
          Content
        </Box>
      </Reveal>
    ),
  },
  {
    description: 'Disabled state of the Reveal.',
    jsx: (
      <Reveal label="Label" disabled>
        <Box blockSize={80} padding={20}>
          Content
        </Box>
      </Reveal>
    ),
  },
]

export { REVEAL_EXAMPLES_META }
