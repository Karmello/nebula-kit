import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { PRO_PAGE_CATEGORIES } from 'client/definitions'
import { LIB_PREFIX } from 'lib/definitions'

export type ProPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useProPageStore = create<ProPageStore>()(
  persist(
    set => ({
      categoryKey: PRO_PAGE_CATEGORIES[0].key,
      setCategoryKey: categoryKey => set(() => ({ categoryKey })),
      itemKey: PRO_PAGE_CATEGORIES[0].items[0].key,
      setItemKey: itemKey => set(() => ({ itemKey })),
      sectionKey: PRO_PAGE_CATEGORIES[0].items[0].sections[0].key,
      setSectionKey: sectionKey => set(() => ({ sectionKey })),
    }),
    {
      name: `${LIB_PREFIX}.pro`,
    }
  )
)
