import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { ApiUser } from 'client/definitions'
import { LIB_PREFIX } from 'lib/definitions'

export type AppStore = {
  token: string
  user: ApiUser | null
  setToken: (token: string) => void
  setUser: (user: ApiUser | null) => void
}

export const useAppStore = create<AppStore>()(
  persist<AppStore>(
    set => ({
      token: '',
      user: null,
      setToken: (token: string) => set({ token }),
      setUser: (user: ApiUser | null) => set({ user }),
    }),
    {
      name: `${LIB_PREFIX}.app`,
      partialize: state => ({ token: state.token }) as AppStore,
    }
  )
)
