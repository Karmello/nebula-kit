import { DropdownListItemProps } from 'lib/components/shared'

type AutocompleteOptionOwnProps = {
  value: string
  label: string
}

type PropsFromDropdownListItem = Omit<DropdownListItemProps<'button'>, 'bold' | 'tag'>

export type AutocompleteOptionProps = PropsFromDropdownListItem & AutocompleteOptionOwnProps
