import { create } from 'zustand'

export type AppStore = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const useAppStore = create<AppStore>(set => ({
  loading: false,
  setLoading: loading => set(() => ({ loading })),
}))
