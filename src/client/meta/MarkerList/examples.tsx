import { ComponentMeta } from 'client/definitions'
import { MarkerList } from 'lib/components'
import { MarkerListProps } from 'lib/components/core/MarkerList'

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
      <MarkerList listStyle="circle" gap="lg">
        <MarkerList.Item>Item 1</MarkerList.Item>
        <MarkerList.Item>Item 2</MarkerList.Item>
      </MarkerList>
    ),
  },
]

export { MARKER_LIST_EXAMPLES_META }
