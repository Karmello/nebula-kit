import { ComponentMeta } from 'client/definitions'
import { VirtualList, VirtualListProps } from 'lib/components'

const VIRTUAL_LIST_EXAMPLES_META: ComponentMeta<VirtualListProps>['examples'] = [
  {
    description: '...',
    jsx: <VirtualList />,
    noSandBox: true,
  },
]

export { VIRTUAL_LIST_EXAMPLES_META }
