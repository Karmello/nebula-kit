import { create } from 'zustand'

import { DOCS_CATEGORIES } from 'client/definitions'

export type DocsPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useDocsPageStore = create<DocsPageStore>(set => ({
  categoryKey: DOCS_CATEGORIES[0].key,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: DOCS_CATEGORIES[0].items[0].key,
  setItemKey: itemKey => set(() => ({ itemKey })),
  sectionKey: DOCS_CATEGORIES[0].items[0].sections[0].key,
  setSectionKey: sectionKey => set(() => ({ sectionKey })),
}))
