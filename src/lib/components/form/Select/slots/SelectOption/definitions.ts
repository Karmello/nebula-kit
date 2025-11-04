import { DropdownListItemProps } from 'lib/components'
import { ButtonTag } from 'lib/components/controls/Button/definitions'

export const DEFAULT_SELECT_JUSTIFY_CONTENT: SelectOptionProps['justifyContent'] = 'flex-start'

type SelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem<T extends ButtonTag = 'button'> = Omit<DropdownListItemProps<T>, 'bold'>

export type SelectOptionProps<T extends ButtonTag = 'button'> = PropsFromDropdownListItem<T> &
  SelectOptionOwnProps
