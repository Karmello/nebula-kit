import { create } from 'zustand'

import { CORE_PAGE_CATEGORIES } from 'client/definitions'

export type CorePageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useCorePageStore = create<CorePageStore>(set => ({
  categoryKey: CORE_PAGE_CATEGORIES[0].key,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: CORE_PAGE_CATEGORIES[0].items[0].key,
  setItemKey: itemKey => set(() => ({ itemKey })),
  sectionKey: CORE_PAGE_CATEGORIES[0].items[0].sections[0].key,
  setSectionKey: sectionKey => set(() => ({ sectionKey })),
}))
