import { Flex as FlexBase } from './flex'

import { FlexItem } from './FlexItem'

export const Flex = Object.assign(FlexBase, {
  Item: FlexItem,
})

export * from './definitions'
export * from './FlexItem'
