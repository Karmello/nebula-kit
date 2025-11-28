import { ComponentMeta } from 'client/definitions'
import { Flex, Box } from 'lib/components'
import { FlexItemProps } from 'lib/components/core/layout/Flex/FlexItem/definitions'

const FLEX_ITEM_EXAMPLES_META: ComponentMeta<FlexItemProps>['examples'] = [
  {
    description: 'Using Flex.Item to let one item expand while the other keeps its natural size.',
    jsx: (
      <Flex>
        <Flex.Item flex={1}>
          <Box variant="outline" color="blue" intent="primary">
            Item 1
          </Box>
        </Flex.Item>
        <Flex.Item>
          <Box variant="outline" color="blue" intent="primary">
            Item 2
          </Box>
        </Flex.Item>
      </Flex>
    ),
  },
]

export { FLEX_ITEM_EXAMPLES_META }
