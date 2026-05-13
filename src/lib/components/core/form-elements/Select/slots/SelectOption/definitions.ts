import { DropdownListItemProps } from 'lib/components'

export const DEFAULT_SELECT_OPTION_ALIGN: SelectOptionProps['align'] = 'start'

type SelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem = Omit<DropdownListItemProps<'button'>, 'bold' | 'tag'>

export type SelectOptionProps = PropsFromDropdownListItem & SelectOptionOwnProps
