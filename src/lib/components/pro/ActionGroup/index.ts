import { ActionGroup as ActionGroupBase } from './action-group'
import { ActionGroupItem } from './slots'

export const ActionGroup = Object.assign(ActionGroupBase, {
  Item: ActionGroupItem,
})

export * from './action-group'
export * from './constants'
export * from './slots'
export * from './types'
