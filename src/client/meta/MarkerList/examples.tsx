import { ComponentMeta } from 'client/definitions'
import { Box, MarkerList } from 'lib/components'
import { MarkerListOwnProps } from 'lib/components/elements/MarkerList/definitions'

export default [
  {
    description: 'Displays a basic list with two items.',
    jsx: (
      <MarkerList>
        <MarkerList.Item>Item 1</MarkerList.Item>
        <MarkerList.Item>Item 2</MarkerList.Item>
      </MarkerList>
    ),
  },
  {
    description: 'Shows a list with circular markers and custom spacing between items.',
    jsx: (
      <MarkerList listStyle="circle" gap={10}>
        <MarkerList.Item>Item 1</MarkerList.Item>
        <MarkerList.Item>Item 2</MarkerList.Item>
      </MarkerList>
    ),
  },
  {
    description: 'Displays a numbered list where each item contains a styled box.',
    jsx: (
      <MarkerList listStyle="decimal">
        <MarkerList.Item>
          <Box variant="solid" intent="primary" padding={3}>
            Item
          </Box>
        </MarkerList.Item>
        <MarkerList.Item>
          <Box variant="solid" intent="primary" padding={3}>
            Item
          </Box>
        </MarkerList.Item>
      </MarkerList>
    ),
  },
] as ComponentMeta<MarkerListOwnProps>['examples']
