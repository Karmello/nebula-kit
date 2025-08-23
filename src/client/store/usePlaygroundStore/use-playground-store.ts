import { create } from 'zustand'

import { RoutingCategoryKey, RoutingItemKey } from 'client/definitions'

export type PlaygroundStore = {
  categoryKey: RoutingCategoryKey
  setCategoryKey: (categoryKey: RoutingCategoryKey) => void
  itemKey: RoutingItemKey
  setItemKey: (itemKey: RoutingItemKey) => void
}

export const usePlaygroundStore = create<PlaygroundStore>(set => ({
  categoryKey: RoutingCategoryKey.primitive,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: RoutingItemKey.box,
  setItemKey: itemKey => set(() => ({ itemKey })),
}))
