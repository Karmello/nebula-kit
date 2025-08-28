import { create } from 'zustand'

import { RoutingCategoryKey, RoutingItemKey } from 'client/definitions'
import { BoxVariant, BoxIntent } from 'lib/definitions'

export type PlaygroundStore = {
  categoryKey: RoutingCategoryKey
  setCategoryKey: (categoryKey: RoutingCategoryKey) => void
  itemKey: RoutingItemKey
  setItemKey: (itemKey: RoutingItemKey) => void
  variant: BoxVariant
  setVariant: (variant: BoxVariant) => void
  intent: BoxIntent
  setIntent: (intent: BoxIntent) => void
}

export const usePlaygroundStore = create<PlaygroundStore>(set => ({
  categoryKey: RoutingCategoryKey.base,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: RoutingItemKey.box,
  setItemKey: itemKey => set(() => ({ itemKey })),
  variant: 'solid',
  setVariant: variant => set(() => ({ variant })),
  intent: 'neutral',
  setIntent: intent => set(() => ({ intent })),
}))
