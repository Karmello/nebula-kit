import { MarkerList as MarkerListBase } from './marker-list'
import { MarkerListItem } from './slots'

export const MarkerList = Object.assign(MarkerListBase, {
  Item: MarkerListItem,
})

export * from './constants'
export * from './slots'
export * from './types'
