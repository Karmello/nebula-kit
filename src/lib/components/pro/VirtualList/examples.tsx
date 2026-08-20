import { Box } from 'lib/index.core'
import { VirtualList } from 'lib/index.pro'
import { type Example } from 'client/definitions'

export const VIRTUAL_LIST_EXAMPLES: Example[] = [
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
