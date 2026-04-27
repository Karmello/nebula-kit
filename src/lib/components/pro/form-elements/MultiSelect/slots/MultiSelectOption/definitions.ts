import { DropdownListItemProps } from 'lib/components'

export const DEFAULT_MULTI_SELECT_OPTION_JUSTIFY_CONTENT: MultiSelectOptionProps['justifyContent'] = 'space-between'

type MultiSelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem = Omit<DropdownListItemProps<'button'>, 'bold' | 'tag'>

export type MultiSelectOptionProps = PropsFromDropdownListItem & MultiSelectOptionOwnProps
