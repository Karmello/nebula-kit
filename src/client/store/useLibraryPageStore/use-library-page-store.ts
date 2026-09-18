import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX } from 'lib/constants'
import { LIBRARY_CATEGORIES } from 'client/definitions'

export type LibraryPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useLibraryPageStore = create<LibraryPageStore>()(
  persist(
    set => ({
      categoryKey: LIBRARY_CATEGORIES[0].key,
      setCategoryKey: categoryKey => set(() => ({ categoryKey })),
      itemKey: LIBRARY_CATEGORIES[0].items[0].key,
      setItemKey: itemKey => set(() => ({ itemKey })),
      sectionKey: LIBRARY_CATEGORIES[0].items[0].sections[0].key,
      setSectionKey: sectionKey => set(() => ({ sectionKey })),
    }),
    {
      name: `${LIB_PREFIX}.library`,
    }
  )
)
