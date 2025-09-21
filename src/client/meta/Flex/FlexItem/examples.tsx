import { ComponentMeta } from 'client/definitions'
import { Flex, Box } from 'lib/components'
import { FlexItemOwnProps } from 'lib/components/layout-base/Flex/FlexItem/definitions'

export default [
  {
    description: 'Using Flex.Item to let one item expand while the other keeps its natural size.',
    jsx: (
      <Flex>
        <Flex.Item flex={1}>
          <Box variant="outline" intent="primary">
            Item 1
          </Box>
        </Flex.Item>
        <Flex.Item>
          <Box variant="outline" intent="primary">
            Item 2
          </Box>
        </Flex.Item>
      </Flex>
    ),
  },
] as ComponentMeta<FlexItemOwnProps>['examples']
