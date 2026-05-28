import { DropdownListItemProps } from 'lib/components/shared'

type AutocompleteOptionOwnProps = {
  value: string
  label: string
}

type PropsFromDropdownListItem = Pick<DropdownListItemProps, 'children'>

export type AutocompleteOptionProps = PropsFromDropdownListItem & AutocompleteOptionOwnProps
