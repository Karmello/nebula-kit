import { ComponentMeta } from 'client/definitions'
import { DropdownList, DropdownListProps } from 'lib/components'

const DROPDOWN_LIST_EXAMPLES_META: ComponentMeta<DropdownListProps>['examples'] = [
  {
    description: 'Basic DropdownList with three items.',
    jsx: (
      <DropdownList>
        <DropdownList.Item>Item 1</DropdownList.Item>
        <DropdownList.Item>Item 2</DropdownList.Item>
        <DropdownList.Item>Item 3</DropdownList.Item>
      </DropdownList>
    ),
  },
]

export { DROPDOWN_LIST_EXAMPLES_META }
