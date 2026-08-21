import { Dispatch, SetStateAction } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { NebkitProviderProps } from 'lib/components'
import {
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_PROVIDER_BRAND,
  DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE,
  DEFAULT_NEBKIT_PROVIDER_SATURATION,
  DEFAULT_NEBKIT_PROVIDER_THEME,
} from 'lib/components/core/NebkitProvider'
import { LIB_PREFIX } from 'lib/constants'
import { ApiUser } from 'client/definitions'

export type AppStore = {
  theme: NebkitProviderProps['theme']
  setTheme: (theme: NebkitProviderProps['theme']) => void
  brand: NebkitProviderProps['brand']
  setBrand: (brand: NebkitProviderProps['brand']) => void
  saturation: NebkitProviderProps['saturation']
  setSaturation: (saturation: NebkitProviderProps['saturation']) => void
  borderRadiusSize: NebkitProviderProps['borderRadiusSize']
  setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) => void
  rippleMode: NebkitProviderProps['rippleMode']
  setRippleMode: (rippleMode: NebkitProviderProps['rippleMode']) => void
  user: ApiUser | null
  setUser: (user: ApiUser | null) => void
  showWebsiteMap: boolean
  setShowWebsiteMap: Dispatch<SetStateAction<boolean>>
  showAppJump: boolean
  setShowAppJump: Dispatch<SetStateAction<boolean>>
  showAppSettings: boolean
  setShowAppSettings: (showAppSettings: boolean) => void
  flipGlobalThemeOnExamples: boolean
  setFlipGlobalThemeOnExamples: (flipGlobalThemeOnExamples: boolean) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    set =>
      ({
        theme: DEFAULT_NEBKIT_PROVIDER_THEME,
        setTheme: (theme: NebkitProviderProps['theme']) => set({ theme }),
        brand: DEFAULT_NEBKIT_PROVIDER_BRAND,
        setBrand: (brand: NebkitProviderProps['brand']) => set({ brand }),
        saturation: DEFAULT_NEBKIT_PROVIDER_SATURATION,
        setSaturation: (saturation: NebkitProviderProps['saturation']) => set({ saturation }),
        borderRadiusSize: DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE,
        setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) =>
          set({ borderRadiusSize }),
        rippleMode: DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE,
        setRippleMode: (rippleMode: NebkitProviderProps['rippleMode']) => set({ rippleMode }),
        user: null,
        setUser: (user: ApiUser | null) => set({ user }),
        showWebsiteMap: false,
        setShowWebsiteMap: (showWebsiteMap: boolean) => set({ showWebsiteMap }),
        showAppJump: false,
        setShowAppJump: (showAppJump: boolean) => set({ showAppJump }),
        showAppSettings: false,
        setShowAppSettings: (showAppSettings: boolean) => set({ showAppSettings }),
        flipGlobalThemeOnExamples: true,
        setFlipGlobalThemeOnExamples: flipGlobalThemeOnExamples =>
          set({ flipGlobalThemeOnExamples }),
      }) as AppStore,
    {
      name: `${LIB_PREFIX}.app`,
      partialize: state => ({
        theme: state.theme,
        brand: state.brand,
        saturation: state.saturation,
        borderRadiusSize: state.borderRadiusSize,
        rippleMode: state.rippleMode,
        flipGlobalThemeOnExamples: state.flipGlobalThemeOnExamples,
      }),
    }
  )
)
