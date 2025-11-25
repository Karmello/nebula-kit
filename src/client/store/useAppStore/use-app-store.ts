import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { User } from 'client/definitions'
import { LIB_PREFIX } from 'lib/definitions'

export type AppStore = {
  loading: boolean
  token: string
  plan: string
  setLoading: (loading: boolean) => void
  setToken: (token: string) => void
  setPlan: (plan: string) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    set => ({
      loading: false,
      token: '',
      plan: '',
      setLoading: loading => set({ loading }),
      setToken: token => set({ token }),
      setPlan: plan => set({ plan }),
    }),
    {
      name: `${LIB_PREFIX}.app`,
      partialize: state => ({ token: state.token }),
    }
  )
)
