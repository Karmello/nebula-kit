import { DropdownListItemProps } from 'lib/components'

export const DEFAULT_AUTOCOMPLETE_OPTION_JUSTIFY_CONTENT: AutocompleteOptionProps['justifyContent'] = 'space-between'

type AutocompleteOptionOwnProps = {
  value: string
  label: string
}

type PropsFromDropdownListItem = Omit<DropdownListItemProps<'button'>, 'bold' | 'tag'>

export type AutocompleteOptionProps = PropsFromDropdownListItem & AutocompleteOptionOwnProps
