import { DropdownListItemProps } from 'lib/components/shared'

type AutocompleteOptionOwnProps = {
  value: string
  label: string
}

type PropsFromDropdownListItem = {
  children?: DropdownListItemProps['children']
}

export type AutocompleteOptionProps = PropsFromDropdownListItem & AutocompleteOptionOwnProps
