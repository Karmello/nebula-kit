import { DropdownList as DropdownListBase } from './dropdown-list'

import { DropdownListItem, DropdownListTrigger } from './slots'

export const DropdownList = Object.assign(DropdownListBase, {
  Trigger: DropdownListTrigger,
  Item: DropdownListItem,
})

export { type DropdownListProps } from './definitions'
export type { DropdownListItemProps, DropdownListTriggerProps } from './slots'
