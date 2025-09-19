import { Grid as GridBase } from './grid'

import { GridItem } from './GridItem'

export const Grid = Object.assign(GridBase, {
  Item: GridItem,
})

export { type GridProps } from './definitions'
export * from './GridItem'
