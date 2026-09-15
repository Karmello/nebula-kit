export const isInsideLogicalTree = (node: Node, root: HTMLElement) => {
  if (root.contains(node)) return true

  if (!(node instanceof HTMLElement)) return false

  const portalRoot = node.closest('.neb-portal')
  if (!portalRoot) return false

  return true
}
