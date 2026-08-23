import { DropdownList as DropdownListBase } from './dropdown-list'
import { DropdownListItem, DropdownListTrigger } from './slots'

export const DropdownList = Object.assign(DropdownListBase, {
  Trigger: DropdownListTrigger,
  Item: DropdownListItem,
})

export * from './constants'
export * from './slots'
export * from './types'
