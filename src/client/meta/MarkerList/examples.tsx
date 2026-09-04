import { MarkerList } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const MARKER_LIST_EXAMPLES: DocExample[] = [
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
      <MarkerList listStyle="circle" gap="48px">
        <MarkerList.Item>Item 1</MarkerList.Item>
        <MarkerList.Item>Item 2</MarkerList.Item>
      </MarkerList>
    ),
  },
]
