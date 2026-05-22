import { FOUNDATIONS_CATEGORIES, COMPONENT_CATEGORIES } from 'client/definitions'

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
    value: 'components',
    label: 'Components',
    children: parsePageCategories(COMPONENT_CATEGORIES),
  },
]
