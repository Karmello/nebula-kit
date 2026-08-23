import { DropdownListItemProps } from 'lib/components/shared'

export type AutocompleteOptionProps = {
  // own
  value: string
  label: string
  // DropdownListItem
  children?: DropdownListItemProps['children']
}
