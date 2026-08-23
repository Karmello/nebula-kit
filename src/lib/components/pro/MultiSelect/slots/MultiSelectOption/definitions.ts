import { DropdownListItemProps } from 'lib/components/shared'

export type MultiSelectOptionProps = {
  // own
  value: string
  // DropdownListItem
  children?: DropdownListItemProps['children']
}
