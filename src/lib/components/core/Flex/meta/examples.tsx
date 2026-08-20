import { Flex } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { Box } from '../../Box'

export const FLEX_EXAMPLES: Example[] = [
  {
    description: 'Flex arranging two boxes side by side.',
    jsx: (
      <Flex>
        <Box drawable variant="outline" intent="primary">
          Item 1
        </Box>
        <Box drawable variant="outline" intent="primary">
          Item 2
        </Box>
      </Flex>
    ),
  },
]

export const FLEX_ITEM_EXAMPLES: Example[] = [
  {
    description: 'Using Flex.Item to let one item expand while the other keeps its natural size.',
    jsx: (
      <Flex>
        <Flex.Item flex="1">
          <Box drawable variant="outline" intent="primary">
            Item 1
          </Box>
        </Flex.Item>
        <Flex.Item>
          <Box drawable variant="outline" intent="primary">
            Item 2
          </Box>
        </Flex.Item>
      </Flex>
    ),
  },
]
