import { DropdownListItemProps } from 'lib/components'

export const DEFAULT_AUTOCOMPLETE_OPTION_ALIGN: AutocompleteOptionProps['align'] = 'split'

type AutocompleteOptionOwnProps = {
  value: string
  label: string
}

type PropsFromDropdownListItem = Omit<DropdownListItemProps<'button'>, 'bold' | 'tag'>

export type AutocompleteOptionProps = PropsFromDropdownListItem & AutocompleteOptionOwnProps
