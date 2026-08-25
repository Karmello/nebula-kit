import { BoxGroup as BoxGroupBase } from './box-group'
import { BoxGroupItem } from './slots'

export const BoxGroup = Object.assign(BoxGroupBase, {
  Item: BoxGroupItem,
})

export * from './slots'
export * from './types'
