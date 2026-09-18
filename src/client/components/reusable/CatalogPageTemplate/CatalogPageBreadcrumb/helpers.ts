import { FOUNDATIONS_CATEGORIES, LIBRARY_CATEGORIES } from 'client/definitions'

export const parsePageCategories = (
  pageCategories: typeof FOUNDATIONS_CATEGORIES | typeof LIBRARY_CATEGORIES
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
