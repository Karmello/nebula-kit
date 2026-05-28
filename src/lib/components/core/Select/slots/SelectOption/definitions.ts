import { DropdownListItemProps } from 'lib/components/shared'

type SelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem = Pick<DropdownListItemProps, 'children'>

export type SelectOptionProps = PropsFromDropdownListItem & SelectOptionOwnProps
