import { create } from 'zustand'

import { ApiUser } from 'client/definitions'

export type AppStore = {
  user: ApiUser | null
  setUser: (user: ApiUser | null) => void
}

export const useAppStore = create<AppStore>()(set => ({
  user: null,
  setUser: (user: ApiUser | null) => set({ user }),
}))
