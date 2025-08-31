import { create } from 'zustand'

export type FoundationsPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useFoundationsPageStore = create<FoundationsPageStore>(set => ({
  categoryKey: '',
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: '',
  setItemKey: itemKey => set(() => ({ itemKey })),
  sectionKey: '',
  setSectionKey: sectionKey => set(() => ({ sectionKey })),
}))
