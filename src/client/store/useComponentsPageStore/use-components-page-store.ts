import { create } from 'zustand'

export type ComponentsPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useComponentsPageStore = create<ComponentsPageStore>(set => ({
  categoryKey: '',
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: '',
  setItemKey: itemKey => set(() => ({ itemKey })),
  sectionKey: '',
  setSectionKey: sectionKey => set(() => ({ sectionKey })),
}))
