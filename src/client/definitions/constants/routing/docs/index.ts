import { DOCS_CATEGORIES } from '../playground'

export const PLAYGROUND_CATEGORIES = [
  ...DOCS_CATEGORIES.slice(5).map(({ items, ...rest }) => ({
    items: items.map(({ key, label }) => ({ key, label })),
    ...rest,
  })),
]
