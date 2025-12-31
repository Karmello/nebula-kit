import { ComponentMeta } from 'client/definitions'
import { Button, DropdownList, DropdownListProps } from 'lib/components'

const DROPDOWN_LIST_EXAMPLES_META: ComponentMeta<DropdownListProps>['examples'] = [
  {
    jsx: (
      <DropdownList>
        <DropdownList.Trigger>
          <Button>Toggle list</Button>
        </DropdownList.Trigger>
        {Array.from({ length: 3 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
    skip: true,
  },
  {
    description: 'Default DropdownList renders with tertiary intent and muted divider between items.',
    jsx: (
      <DropdownList>
        <DropdownList.Trigger>
          <Button variant="ghost" intent="primary">
            Toggle list
          </Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList rendered with items of a custom size.',
    jsx: (
      <DropdownList size="lg">
        <DropdownList.Trigger>
          <Button variant="ghost" intent="primary">
            Toggle list
          </Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList configured to stay open after an item is chosen.',
    jsx: (
      <DropdownList keepOpen>
        <DropdownList.Trigger>
          <Button variant="ghost" intent="primary">
            Toggle list
          </Button>
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
          <Button variant="ghost" intent="primary">
            Toggle list
          </Button>
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
    description: 'DropdownList showing a custom number of visible items.',
    jsx: (
      <DropdownList visibleItemsCount={3}>
        <DropdownList.Trigger>
          <Button variant="ghost" intent="primary">
            Toggle list
          </Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList centered on a specific item when rendered.',
    jsx: (
      <DropdownList scrollToIndex={4} scrollAlign="center">
        <DropdownList.Trigger>
          <Button variant="ghost" intent="primary">
            Toggle list
          </Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description: 'DropdownList positioned above the trigger element, aligned to its left edge.',
    jsx: (
      <DropdownList placement="top-start">
        <DropdownList.Trigger>
          <Button variant="ghost" intent="primary">
            Toggle list
          </Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
]

export { DROPDOWN_LIST_EXAMPLES_META }
