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
          <DropdownList.Item key={k} disabled>
            Item {k + 1}
          </DropdownList.Item>
        ))}
      </DropdownList>
    ),
    skip: true,
  },
  {
    description:
      'By default, DropdownList items render with the solid variant, tertiary intent and a muted divider between items.',
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
    description: 'DropdownList configured to close when an item is clicked.',
    jsx: (
      <DropdownList inlineSize="200px" closeOnItemClick>
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
      <DropdownList inlineSize="200px" closeOnItemClick>
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
      <DropdownList inlineSize="200px" closeOnItemClick visibleItemsCount={3}>
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
    description:
      'DropdownList rendered using the outline variant with primary intent applied to items and the list border and tertiary intent applied to item dividers.',
    jsx: (
      <DropdownList
        itemVariant="outline"
        itemIntent="primary"
        listBorderIntent="primary"
        itemBorderIntent="tertiary"
      >
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
    description:
      'DropdownList rendered using the ghost variant with danger intent applied to items and muted intent applied to the list border.',
    jsx: (
      <DropdownList itemVariant="ghost" itemIntent="danger" listBorderIntent="muted">
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
