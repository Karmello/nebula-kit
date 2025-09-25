import { ComponentMeta } from 'client/definitions'
import { Box, MarkerList } from 'lib/components'
import { MarkerListProps } from 'lib/components/elements/MarkerList/definitions'

const MARKER_LIST_EXAMPLES_META: ComponentMeta<MarkerListProps>['examples'] = [
  {
    description: 'Basic MarkerList with two list items.',
    jsx: (
      <MarkerList>
        <MarkerList.Item>Item 1</MarkerList.Item>
        <MarkerList.Item>Item 2</MarkerList.Item>
      </MarkerList>
    ),
  },
  {
    description: 'MarkerList with circular markers and custom spacing between items.',
    jsx: (
      <MarkerList listStyle="circle" rowGap={10}>
        <MarkerList.Item>Item 1</MarkerList.Item>
        <MarkerList.Item>Item 2</MarkerList.Item>
      </MarkerList>
    ),
  },
  {
    description: 'Numbered MarkerList where each item contains a styled Box.',
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
]

export { MARKER_LIST_EXAMPLES_META }
