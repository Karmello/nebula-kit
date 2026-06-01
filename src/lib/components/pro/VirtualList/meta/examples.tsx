import { ComponentMeta } from 'client/definitions'

import { Box } from '../../../core/Box'
import { type VirtualListProps } from '../definitions'
import { VirtualList } from '../virtual-list'

const VIRTUAL_LIST_EXAMPLES_META: ComponentMeta<VirtualListProps>['examples'] = [
  {
    description: 'Virtual list with 100 items, displaying 10 and rendering 30 at a time.',
    sandBoxWithNoPadding: true,
    jsx: (
      <VirtualList<{ label: string }>
        items={Array.from({ length: 100 }, (v, k) => ({ label: `List item ${k + 1}` }))}
        itemBlockSize={50}
        visibleItemsCount={10}
        renderItem={({ label }) => (
          <Box
            drawable
            interactive
            variant="solid"
            intent="muted"
            borderRadius="0px"
            blockSize="50px"
            textAlign="center"
            padding="15px"
          >
            {label}
          </Box>
        )}
        intent="muted"
      />
    ),
    code: `<VirtualList<{ label: string }>
  items={Array.from({ length: 100 }, (v, k) => ({ label: \`List item $\{k + 1}\` }))}
  itemBlockSize={50}
  visibleItemsCount={10}
  renderItem={({ label }, index) => (
    <Box
      drawable
      interactive
      variant="solid"
      intent="muted"
      borderRadius="0px"
      blockSize="50px"
      textAlign="center"
      padding="15px"
    >
      {label}
    </Box>
  )}
  intent="muted"
/>`,
  },
]

export { VIRTUAL_LIST_EXAMPLES_META }
