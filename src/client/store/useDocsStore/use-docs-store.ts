import { create } from 'zustand'

import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

export type DocsStore = {
  categoryKey: RoutingCategoryKey
  itemKey: RoutingItemKey
  setCategoryKey: (categoryKey: RoutingCategoryKey) => void
  setItemKey: (itemKey: RoutingItemKey) => void
}

export const useDocsStore = create<DocsStore>(set => ({
  categoryKey: Object.keys(RoutingCategoryKey)[0] as RoutingCategoryKey,
  itemKey: Object.keys(RoutingItemKey)[0] as RoutingItemKey,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  setItemKey: itemKey => set(() => ({ itemKey })),
}))
