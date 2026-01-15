import { FOUNDATIONS_CATEGORIES, CORE_PAGE_CATEGORIES, PRO_PAGE_CATEGORIES } from 'client/definitions'

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
    value: 'core',
    label: 'Core',
    children: parsePageCategories(CORE_PAGE_CATEGORIES),
  },
  {
    value: 'pro',
    label: 'Pro',
    children: parsePageCategories(PRO_PAGE_CATEGORIES),
  },
]
