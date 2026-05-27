import { DropdownListItemProps } from 'lib/components/shared'

type SelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem = Omit<DropdownListItemProps<'button'>, 'bold' | 'tag'>

export type SelectOptionProps = PropsFromDropdownListItem & SelectOptionOwnProps
