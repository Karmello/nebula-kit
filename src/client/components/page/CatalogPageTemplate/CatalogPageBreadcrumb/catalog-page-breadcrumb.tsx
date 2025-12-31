import { useMemo } from 'react'

import { FOUNDATIONS_CATEGORIES, CORE_PAGE_CATEGORIES, PRO_PAGE_CATEGORIES } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { Breadcrumb } from 'lib/components'

const parsePageCategories = (
  pageCategories: typeof FOUNDATIONS_CATEGORIES | typeof CORE_PAGE_CATEGORIES | typeof PRO_PAGE_CATEGORIES
) => {
  return pageCategories.map(c => ({
    value: c.key,
    label: c.label,
    children: c.items.map(i => ({
      value: i.key,
      label: i.label,
      children: i.sections.map(s => ({ value: s.key, label: s.label })),
    })),
  }))
}

type CatalogPageBreadcrumbProps = {
  pageKey: string
  categoryKey: string
  itemKey: string
  sectionKey: string
}

export const CatalogPageBreadcrumb = ({
  pageKey,
  categoryKey,
  itemKey,
  sectionKey,
}: CatalogPageBreadcrumbProps) => {
  const navigateTo = useNavigateTo()

  const tree = useMemo(
    () => [
      {
        value: 'foundations',
        label: 'Foundations',
        children: parsePageCategories(FOUNDATIONS_CATEGORIES),
      },
      {
        value: 'core',
        label: 'Core',
        children: parsePageCategories(CORE_PAGE_CATEGORIES),
      },
      {
        value: 'pro',
        label: 'Pro',
        children: parsePageCategories(PRO_PAGE_CATEGORIES),
      },
    ],
    []
  )

  return (
    <Breadcrumb
      tree={tree}
      path={[pageKey, categoryKey, itemKey, sectionKey]}
      onChange={path => {
        const currentPageTree = tree.find(node => node.value === path[0])
        const pageKey = path[0]
        const categoryKey = path[1] || currentPageTree.children[0].value
        const itemKey =
          path[2] || currentPageTree.children.find(node => node.value === categoryKey).children[0].value
        const sectionKey =
          path[3] ||
          currentPageTree.children
            .find(node => node.value === categoryKey)
            .children.find(node => node.value === itemKey).children[0].value

        navigateTo(`/${pageKey}/${categoryKey}/${itemKey}/${sectionKey}`)
      }}
    />
  )
}
