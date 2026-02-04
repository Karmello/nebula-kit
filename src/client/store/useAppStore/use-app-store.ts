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
  ripple: NebkitProviderProps['ripple']
  setRipple: (ripple: NebkitProviderProps['ripple']) => void
  user: ApiUser | null
  setUser: (user: ApiUser | null) => void
  showAppJump: boolean
  setShowAppJump: (showAppJump: boolean) => void
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
        ripple: true,
        setRipple: (ripple: NebkitProviderProps['ripple']) => set({ ripple }),
        user: null,
        setUser: (user: ApiUser | null) => set({ user }),
        showAppJump: false,
        setShowAppJump: (showAppJump: boolean) => set({ showAppJump }),
      }) as AppStore,
    {
      name: `${LIB_PREFIX}.app`,
      partialize: state => ({
        theme: state.theme,
        brand: state.brand,
        borderRadiusSize: state.borderRadiusSize,
        ripple: state.ripple,
      }),
    }
  )
)
