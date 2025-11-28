import { create } from 'zustand'

import { PRO_PAGE_CATEGORIES } from 'client/definitions'

export type ProPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useProPageStore = create<ProPageStore>(set => ({
  categoryKey: PRO_PAGE_CATEGORIES[0].key,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: PRO_PAGE_CATEGORIES[0].items[0].key,
  setItemKey: itemKey => set(() => ({ itemKey })),
  sectionKey: PRO_PAGE_CATEGORIES[0].items[0].sections[0].key,
  setSectionKey: sectionKey => set(() => ({ sectionKey })),
}))
