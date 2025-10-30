import { ComponentMeta } from 'client/definitions'
import { Button, DropdownList, DropdownListProps } from 'lib/components'

const DROPDOWN_LIST_EXAMPLES_META: ComponentMeta<DropdownListProps>['examples'] = [
  {
    jsx: (
      <DropdownList>
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 3 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
    skip: true,
  },
  {
    description:
      'Default DropdownList renders with solid variant, tertiary intent and muted divider between items. It stretches to fill the full horizontal space.',
    jsx: (
      <DropdownList>
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList with outline variant and primary intent.',
    jsx: (
      <DropdownList variant="outline" intent="primary">
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList with ghost variant and primary intent.',
    jsx: (
      <DropdownList variant="ghost" intent="primary">
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList rendered with a large size.',
    jsx: (
      <DropdownList size="lg">
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList rendered with a fixed inline size.',
    jsx: (
      <DropdownList inlineSize="200px">
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList configured to stay open even when an item is chosen.',
    jsx: (
      <DropdownList keepOpen>
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList with all items disabled.',
    jsx: (
      <DropdownList>
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k} disabled>
            Item {k + 1}
          </DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList configured to display a custom number of visible items at a time.',
    jsx: (
      <DropdownList visibleItemsCount={3}>
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList configured to center a specific item on render.',
    jsx: (
      <DropdownList scrollToIndex={4} scrollAlign="center">
        <DropdownList.Trigger>
          <Button>Trigger</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
]

export { DROPDOWN_LIST_EXAMPLES_META }
