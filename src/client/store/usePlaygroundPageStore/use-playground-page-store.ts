import { create } from 'zustand'

import { PLAYGROUND_PAGES } from 'client/definitions'
import { BoxVariant, BoxIntent } from 'lib/definitions'

export type PlaygroundPageStore = {
  categoryKey: string
  setCategoryKey: (categoryKey: string) => void
  itemKey: string
  setItemKey: (itemKey: string) => void
  variant: BoxVariant
  setVariant: (variant: BoxVariant) => void
  intent: BoxIntent
  setIntent: (intent: BoxIntent) => void
}

export const usePlaygroundPageStore = create<PlaygroundPageStore>(set => ({
  categoryKey: PLAYGROUND_PAGES[0].key,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  itemKey: PLAYGROUND_PAGES[0].items[0].key,
  setItemKey: itemKey => set(() => ({ itemKey })),
  variant: 'solid',
  setVariant: variant => set(() => ({ variant })),
  intent: 'neutral',
  setIntent: intent => set(() => ({ intent })),
}))
