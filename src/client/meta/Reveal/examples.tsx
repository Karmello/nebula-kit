import { ComponentMeta } from 'client/definitions'
import { Box, Reveal, RevealProps } from 'lib/components'

const REVEAL_EXAMPLES_META: ComponentMeta<RevealProps>['examples'] = [
  {
    description: 'Default reveal with a label and content provided.',
    jsx: (
      <Reveal label="Label">
        <Box blockSize={40} padding={10}>
          Content
        </Box>
      </Reveal>
    ),
  },
  {
    description: 'Reveal with a centered label and secondary intent applied.',
    jsx: (
      <Reveal label="Label" intent="secondary" labelAlign="center">
        <Box blockSize={40} padding={10}>
          Content
        </Box>
      </Reveal>
    ),
  },
  {
    description: 'Disabled state of the Reveal.',
    jsx: (
      <Reveal label="Label" intent="secondary" labelAlign="center" disabled>
        <Box blockSize={40} padding={10}>
          Content
        </Box>
      </Reveal>
    ),
  },
]

export { REVEAL_EXAMPLES_META }
