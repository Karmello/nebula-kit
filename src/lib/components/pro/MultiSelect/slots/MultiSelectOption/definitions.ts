import { DropdownListItemProps } from 'lib/components/shared'

type MultiSelectOptionOwnProps = {
  value: string
}

type PropsFromDropdownListItem = Omit<DropdownListItemProps<'button'>, 'bold' | 'tag'>

export type MultiSelectOptionProps = PropsFromDropdownListItem & MultiSelectOptionOwnProps
