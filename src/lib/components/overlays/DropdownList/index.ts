import { DropdownList as DropdownListBase } from './dropdown-list'

import { DropdownListItem } from './slots'

export const DropdownList = Object.assign(DropdownListBase, {
  Item: DropdownListItem,
})

export { type DropdownListProps } from './definitions'
export type { DropdownListItemProps } from './slots'
