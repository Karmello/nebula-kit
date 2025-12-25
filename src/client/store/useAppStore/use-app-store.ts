import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { ApiUser } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { LIB_PREFIX } from 'lib/definitions'

export type AppStore = {
  theme: NebkitProviderProps['theme']
  setTheme: (theme: NebkitProviderProps['theme']) => void
  brand: NebkitProviderProps['brand']
  setBrand: (brand: NebkitProviderProps['brand']) => void
  borderRadiusSize: NebkitProviderProps['borderRadiusSize']
  setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) => void
  user: ApiUser | null
  setUser: (user: ApiUser | null) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    set =>
      ({
        theme: 'light',
        setTheme: (theme: NebkitProviderProps['theme']) => set({ theme }),
        brand: 'gray',
        setBrand: (brand: NebkitProviderProps['brand']) => set({ brand }),
        borderRadiusSize: 'md',
        setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) =>
          set({ borderRadiusSize }),
        user: null,
        setUser: (user: ApiUser | null) => set({ user }),
      }) as AppStore,
    {
      name: `${LIB_PREFIX}.app`,
      partialize: state => ({
        theme: state.theme,
        brand: state.brand,
        borderRadiusSize: state.borderRadiusSize,
      }),
    }
  )
)
