import { ComponentMeta } from 'client/definitions'
import { Box, VirtualList, VirtualListProps } from 'lib/components'

const VIRTUAL_LIST_EXAMPLES_META: ComponentMeta<VirtualListProps>['examples'] = [
  {
    description: 'Virtual list with 100 items displaying 10 at a time.',
    sandBoxWithNoPadding: true,
    jsx: (
      <VirtualList<{ label: string }>
        items={Array.from({ length: 100 }, (v, k) => ({ label: `List item ${k + 1}` }))}
        itemHeight={50}
        visibleItemsCount={10}
        renderItem={({ label }, index) => (
          <Box
            key={index}
            drawable
            interactive
            variant="solid"
            intent="primary"
            borderRadius="0px"
            blockSize="50px"
            textAlign="center"
            padding="15px"
          >
            {label}
          </Box>
        )}
        intent="primary"
      />
    ),
    code: `<VirtualList<{ label: string }>
  items={Array.from({ length: 100 }, (v, k) => ({ label: \`List item $\{k + 1}\` }))}
  itemHeight={50}
  visibleItemsCount={10}
  renderItem={({ label }, index) => (
    <Box
      key={index}
      drawable
      interactive
      variant="solid"
      intent="primary"
      borderRadius="0px"
      blockSize="50px"
      textAlign="center"
      padding="15px"
    >
      {label}
    </Box>
  )}
  intent="primary"
/>`,
  },
]

export { VIRTUAL_LIST_EXAMPLES_META }
