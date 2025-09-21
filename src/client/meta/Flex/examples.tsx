import { ComponentMeta } from 'client/definitions'
import { Box, Flex } from 'lib/components'
import { FlexOwnProps } from 'lib/components/layout-base/Flex/definitions'

export default [
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
] as ComponentMeta<FlexOwnProps>['examples']
