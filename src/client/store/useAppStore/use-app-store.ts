import { create } from 'zustand'

export type AppStore = {
  loading: boolean
  distractionFreeMode: boolean
  setLoading: (loading: boolean) => void
  setDistractionFreeMode: (distractionFreeMode: boolean) => void
}

export const useAppStore = create<AppStore>(set => ({
  loading: true,
  distractionFreeMode: false,
  setLoading: loading => set(() => ({ loading })),
  setDistractionFreeMode: distractionFreeMode => set(() => ({ distractionFreeMode })),
}))
