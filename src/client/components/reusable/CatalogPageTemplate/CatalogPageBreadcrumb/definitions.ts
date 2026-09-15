import { COMPONENT_CATEGORIES, FOUNDATIONS_CATEGORIES } from 'client/definitions'

import { parsePageCategories } from './helpers'

export type CatalogPageBreadcrumbProps = {
  pageKey: string
  categoryKey: string
  itemKey: string
  sectionKey: string
}

export const TREE = [
  {
    value: 'foundations',
    label: 'Foundations',
    children: parsePageCategories(FOUNDATIONS_CATEGORIES),
  },
  {
    value: 'library',
    label: 'Library',
    children: parsePageCategories(COMPONENT_CATEGORIES),
  },
]
