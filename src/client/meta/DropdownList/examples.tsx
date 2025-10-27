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
      'By default, DropdownList items render with the solid variant, tertiary intent, a muted divider between items and stretch to fill the full horizontal space.',
    jsx: (
      <DropdownList>
        <DropdownList.Trigger>
          <Button variant="outline" intent="primary" fullWidth>
            Trigger
          </Button>
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
          <Button variant="outline" intent="primary" fullWidth>
            Trigger
          </Button>
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
      <DropdownList inlineSize="200px" keepOpen>
        <DropdownList.Trigger>
          <Button variant="outline" intent="primary" fullWidth>
            Trigger
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
      <DropdownList inlineSize="200px">
        <DropdownList.Trigger>
          <Button variant="outline" intent="primary" fullWidth>
            Trigger
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
    description: 'DropdownList configured to display a custom number of visible items at a time.',
    jsx: (
      <DropdownList inlineSize="200px" visibleItemsCount={3}>
        <DropdownList.Trigger>
          <Button variant="outline" intent="primary" fullWidth>
            Trigger
          </Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description:
      'DropdownList rendered using the outline variant with primary intent applied to items and the list border and tertiary intent applied to item dividers.',
    jsx: (
      <DropdownList
        inlineSize="200px"
        itemVariant="outline"
        itemIntent="primary"
        listBorderIntent="primary"
        itemBorderIntent="tertiary"
      >
        <DropdownList.Trigger>
          <Button variant="outline" intent="primary" fullWidth>
            Trigger
          </Button>
        </DropdownList.Trigger>
        {Array.from({ length: 10 }, (v, k) => (
          <DropdownList.Item key={k}>Item {k + 1}</DropdownList.Item>
        ))}
      </DropdownList>
    ),
  },
  {
    description:
      'DropdownList rendered using the ghost variant with danger intent applied to items and muted intent applied to the list border.',
    jsx: (
      <DropdownList inlineSize="200px" itemVariant="ghost" itemIntent="danger" listBorderIntent="muted">
        <DropdownList.Trigger>
          <Button variant="outline" intent="primary" fullWidth>
            Trigger
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
