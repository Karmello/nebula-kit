import { useNavigateTo } from 'client/hooks'
import { Breadcrumb } from 'lib/components'

import { CatalogPageBreadcrumbProps, TREE } from './definitions'

export const CatalogPageBreadcrumb = ({
  pageKey,
  categoryKey,
  itemKey,
  sectionKey,
}: CatalogPageBreadcrumbProps) => {
  const navigateTo = useNavigateTo()

  return (
    <Breadcrumb
      tree={TREE}
      path={[pageKey, categoryKey, itemKey, sectionKey]}
      onChange={path => {
        const currentPageTree = TREE.find(node => node.value === path[0])
        const pageKey = path[0]
        const categoryKey = path[1] || currentPageTree.children[0].value
        const itemKey =
          path[2] || currentPageTree.children.find(node => node.value === categoryKey).children[0].value
        const sectionKey =
          path[3] ||
          currentPageTree.children
            .find(node => node.value === categoryKey)
            .children.find(node => node.value === itemKey).children[0].value

        setTimeout(() => {
          navigateTo(`/${pageKey}/${categoryKey}/${itemKey}/${sectionKey}`)
        }, 200)
      }}
    />
  )
}
