import { List as ListBase } from './list'

import { ListItem } from './ListItem'

export const List = Object.assign(ListBase, {
  Item: ListItem,
})

export * from './list'
export * from './definitions'
export * from './ListItem'
