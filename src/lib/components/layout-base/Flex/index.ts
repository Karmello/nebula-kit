import { Flex as FlexBase } from './flex'

import { FlexItem } from './flex-item'

export const Flex = Object.assign(FlexBase, {
  Item: FlexItem,
})

export * from './flex'
