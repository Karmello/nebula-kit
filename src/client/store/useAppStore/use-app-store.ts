import { Dispatch, SetStateAction } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { NebkitProviderProps } from 'lib/components'
import {
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_PROVIDER_RIPPLE,
  DEFAULT_NEBKIT_PROVIDER_THEME,
} from 'lib/components/core/NebkitProvider'
import { LIB_PREFIX } from 'lib/constants'
import { ApiUser } from 'client/definitions'

export type AppStore = {
  theme: NebkitProviderProps['theme']
  setTheme: (theme: NebkitProviderProps['theme']) => void
  borderRadiusSize: NebkitProviderProps['borderRadiusSize']
  setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) => void
  ripple: NebkitProviderProps['ripple']
  setRipple: (ripple: NebkitProviderProps['ripple']) => void
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
        borderRadiusSize: DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE,
        setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) =>
          set({ borderRadiusSize }),
        ripple: DEFAULT_NEBKIT_PROVIDER_RIPPLE,
        setRipple: (ripple: NebkitProviderProps['ripple']) => set({ ripple }),
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
        borderRadiusSize: state.borderRadiusSize,
        ripple: state.ripple,
        flipGlobalThemeOnExamples: state.flipGlobalThemeOnExamples,
      }),
    }
  )
)
