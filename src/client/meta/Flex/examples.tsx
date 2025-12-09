import { ComponentMeta } from 'client/definitions'
import { Box, Flex, FlexProps } from 'lib/components'

const FLEX_EXAMPLES_META: ComponentMeta<FlexProps>['examples'] = [
  {
    description: 'Flex arranging two boxes side by side.',
    jsx: (
      <Flex>
        <Box variant="outline" color="blue" intent="primary">
          Item 1
        </Box>
        <Box variant="outline" color="blue" intent="primary">
          Item 2
        </Box>
      </Flex>
    ),
  },
]

export { FLEX_EXAMPLES_META }
