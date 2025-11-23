import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX } from 'lib/definitions'

export type AppStore = {
  loading: boolean
  token: string
  setLoading: (loading: boolean) => void
  setToken: (token: string) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    set => ({
      loading: false,
      token: '',
      setLoading: loading => set({ loading }),
      setToken: token => set({ token }),
    }),
    {
      name: `${LIB_PREFIX}.app`,
      partialize: state => ({ token: state.token }),
    }
  )
)
