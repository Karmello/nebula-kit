import { DropdownListItemProps } from 'lib/components/shared'

type MultiSelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem = {
  children?: DropdownListItemProps['children']
}

export type MultiSelectOptionProps = PropsFromDropdownListItem & MultiSelectOptionOwnProps
