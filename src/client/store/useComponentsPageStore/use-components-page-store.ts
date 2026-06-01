import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { COMPONENT_CATEGORIES } from 'client/definitions'
import { LIB_PREFIX } from 'lib/constants'

export type ComponentsPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  sectionKey: string
  setSectionKey: (sectionKey: string) => void
}

export const useComponentsPageStore = create<ComponentsPageStore>()(
  persist(
    set => ({
      categoryKey: COMPONENT_CATEGORIES[0].key,
      setCategoryKey: categoryKey => set(() => ({ categoryKey })),
      itemKey: COMPONENT_CATEGORIES[0].items[0].key,
      setItemKey: itemKey => set(() => ({ itemKey })),
      sectionKey: COMPONENT_CATEGORIES[0].items[0].sections[0].key,
      setSectionKey: sectionKey => set(() => ({ sectionKey })),
    }),
    {
      name: `${LIB_PREFIX}.components`,
    }
  )
)
