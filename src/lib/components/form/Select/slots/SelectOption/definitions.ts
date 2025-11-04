import { DropdownListItemProps } from 'lib/components'
import { ButtonTag } from 'lib/components/controls/Button/definitions'

export const DEFAULT_SELECT_JUSTIFY_CONTENT: SelectOptionProps['justifyContent'] = 'flex-start'

type SelectOptionOwnProps = {
  value: string
}

export type SelectOptionProps<T extends ButtonTag = 'button'> = DropdownListItemProps<T> &
  SelectOptionOwnProps
