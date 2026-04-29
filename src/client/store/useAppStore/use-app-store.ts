import { Dispatch, SetStateAction } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { ApiUser } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { LIB_PREFIX } from 'lib/definitions'

import {
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_RIPPLE_MODE,
  DEFAULT_NEBKIT_THEME,
  DEFAULT_NEBKIT_EXAMPLES_THEME,
} from 'lib/components/core/utility/NebkitProvider'

export type AppStore = {
  theme: NebkitProviderProps['theme']
  setTheme: (theme: NebkitProviderProps['theme']) => void
  examplesTheme: NebkitProviderProps['theme']
  setExamplesTheme: (examplesTheme: NebkitProviderProps['theme']) => void
  brand: NebkitProviderProps['brand']
  setBrand: (brand: NebkitProviderProps['brand']) => void
  borderRadiusSize: NebkitProviderProps['borderRadiusSize']
  setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) => void
  rippleMode: NebkitProviderProps['rippleMode']
  setRippleMode: (rippleMode: NebkitProviderProps['rippleMode']) => void
  user: ApiUser | null
  setUser: (user: ApiUser | null) => void
  showAppJump: boolean
  setShowAppJump: Dispatch<SetStateAction<boolean>>
  showAppSettings: boolean
  setShowAppSettings: (showAppSettings: boolean) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    set =>
      ({
        theme: DEFAULT_NEBKIT_THEME,
        setTheme: (theme: NebkitProviderProps['theme']) => set({ theme }),
        examplesTheme: DEFAULT_NEBKIT_EXAMPLES_THEME,
        setExamplesTheme: (examplesTheme: NebkitProviderProps['theme']) => set({ examplesTheme }),
        brand: DEFAULT_NEBKIT_BRAND,
        setBrand: (brand: NebkitProviderProps['brand']) => set({ brand }),
        borderRadiusSize: DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
        setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) => set({ borderRadiusSize }),
        rippleMode: DEFAULT_NEBKIT_RIPPLE_MODE,
        setRippleMode: (rippleMode: NebkitProviderProps['rippleMode']) => set({ rippleMode }),
        user: null,
        setUser: (user: ApiUser | null) => set({ user }),
        showAppJump: false,
        setShowAppJump: (showAppJump: boolean) => set({ showAppJump }),
        showAppSettings: false,
        setShowAppSettings: (showAppSettings: boolean) => set({ showAppSettings }),
      }) as AppStore,
    {
      name: `${LIB_PREFIX}.app`,
      partialize: state => ({
        theme: state.theme,
        examplesTheme: state.examplesTheme,
        brand: state.brand,
        borderRadiusSize: state.borderRadiusSize,
        rippleMode: state.rippleMode,
      }),
    }
  )
)
