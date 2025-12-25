import { DropdownListItemProps } from 'lib/components'

export const DEFAULT_SELECT_OPTION_JUSTIFY_CONTENT: SelectOptionProps['justifyContent'] = 'flex-start'

type SelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem = Omit<DropdownListItemProps<'button'>, 'bold' | 'tag'>

export type SelectOptionProps = PropsFromDropdownListItem & SelectOptionOwnProps
