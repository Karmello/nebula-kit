import { BreadcrumbNode } from './definitions'

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
