import { create } from 'zustand'

import { FOUNDATIONS_CATEGORIES } from 'client/definitions'

export type FoundationsPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useFoundationsPageStore = create<FoundationsPageStore>(set => ({
  categoryKey: FOUNDATIONS_CATEGORIES[0].key,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: FOUNDATIONS_CATEGORIES[0].items[0].key,
  setItemKey: itemKey => set(() => ({ itemKey })),
  sectionKey: FOUNDATIONS_CATEGORIES[0].items[0].sections[0].key,
  setSectionKey: sectionKey => set(() => ({ sectionKey })),
}))
