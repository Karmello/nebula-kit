import { ComponentMeta } from 'client/definitions'
import { Flex, FlexItemProps, Box } from 'lib/components'

const FLEX_ITEM_EXAMPLES_META: ComponentMeta<FlexItemProps>['examples'] = [
  {
    description: 'Using Flex.Item to let one item expand while the other keeps its natural size.',
    jsx: (
      <Flex>
        <Flex.Item flex={1}>
          <Box drawable variant="outline" color="blue" intent="primary">
            Item 1
          </Box>
        </Flex.Item>
        <Flex.Item>
          <Box drawable variant="outline" color="blue" intent="primary">
            Item 2
          </Box>
        </Flex.Item>
      </Flex>
    ),
  },
]

export { FLEX_ITEM_EXAMPLES_META }
