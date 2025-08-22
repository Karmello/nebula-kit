import { create } from 'zustand'

import { useLibStore } from 'lib/state'

import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

export type PlaygroundStore = {
  categoryKey: RoutingCategoryKey
  setCategoryKey: (categoryKey: RoutingCategoryKey) => void
  itemKey: RoutingItemKey
  setItemKey: (itemKey: RoutingItemKey) => void
}

const theme = useLibStore.getState().theme

export const usePlaygroundStore = create<PlaygroundStore>(set => ({
  categoryKey: RoutingCategoryKey.primitive,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: RoutingItemKey.box,
  setItemKey: itemKey => set(() => ({ itemKey })),
}))
