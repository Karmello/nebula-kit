import { BreadcrumbNode } from './types'

export const resolveBreadcrumbValues = ({
  visibleItemsCount,
  optionBlockSize,
  itemsCount,
}: {
  visibleItemsCount: number
  optionBlockSize: number
  itemsCount: number
}): { menuBlockSize: number; finalVisibleItemsCount: number } => {
  const finalVisibleItemsCount = Math.min(itemsCount, visibleItemsCount)

  const dividerSize = 2

  const menuBlockSize =
    finalVisibleItemsCount * optionBlockSize +
    (finalVisibleItemsCount - 1) * dividerSize +
    dividerSize

  return {
    menuBlockSize,
    finalVisibleItemsCount,
  }
}

export const convertTreeToLevels = (tree: BreadcrumbNode[], path: string[]): BreadcrumbNode[][] => {
  const levels: BreadcrumbNode[][] = []

  if (!tree.length) return levels

  let nodes = tree

  levels.push(nodes)

  for (let i = 0; i < path.length; i++) {
    const node = nodes.find(node => node.value === path[i])

    if (!node?.children?.length) break

    nodes = node.children
    levels.push(nodes)
  }

  return levels
}
