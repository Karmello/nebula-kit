import { DropdownListItemProps } from 'lib/components/shared'

type MultiSelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem = Pick<DropdownListItemProps, 'children'>

export type MultiSelectOptionProps = PropsFromDropdownListItem & MultiSelectOptionOwnProps
