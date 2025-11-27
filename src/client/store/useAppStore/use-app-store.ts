import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX } from 'lib/definitions'

export type AppStore = {
  token: string
  plan: string
  setToken: (token: string) => void
  setPlan: (plan: string) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    set => ({
      token: '',
      plan: '',
      setToken: token => set({ token }),
      setPlan: plan => set({ plan }),
    }),
    {
      name: `${LIB_PREFIX}.app`,
      partialize: state => ({ token: state.token }),
    }
  )
)
