import { ComponentMeta } from 'client/definitions'

import { type FlexProps } from '../definitions'
import { Flex } from '..'
import { Box } from '../../Box/box'

const FLEX_EXAMPLES_META: ComponentMeta<FlexProps>['examples'] = [
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

export { FLEX_EXAMPLES_META }
