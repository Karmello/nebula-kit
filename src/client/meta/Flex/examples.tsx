import { ComponentMeta } from 'client/definitions'
import { Box, Flex } from 'lib/components'
import { FlexProps } from 'lib/components/layout-base/Flex/definitions'

const FLEX_EXAMPLES_META: ComponentMeta<FlexProps>['examples'] = [
  {
    description: 'Flex arranging two outlined boxes side by side.',
    jsx: (
      <Flex>
        <Box variant="outline" intent="primary">
          Item 1
        </Box>
        <Box variant="outline" intent="primary">
          Item 2
        </Box>
      </Flex>
    ),
  },
]

export { FLEX_EXAMPLES_META }
