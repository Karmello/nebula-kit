import { MarkerList as MarkerListBase } from './marker-list'
import { MarkerListItem } from './MarkerListItem'

export const MarkerList = Object.assign(MarkerListBase, {
  Item: MarkerListItem,
})

export * from './definitions'
export * from './MarkerListItem'
