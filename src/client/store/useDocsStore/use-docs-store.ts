import { create } from 'zustand'

import { DOCS_PAGES } from 'client/definitions'

export type DocsStore = {
  categoryKey: string
  itemKey: string
  setCategoryKey: (categoryKey: string) => void
  setItemKey: (itemKey: string) => void
}

export const useDocsStore = create<DocsStore>(set => ({
  categoryKey: DOCS_PAGES[0].key,
  itemKey: DOCS_PAGES[0].items[0].key,
  setCategoryKey: categoryKey => set(() => ({ categoryKey })),
  setItemKey: itemKey => set(() => ({ itemKey })),
}))
