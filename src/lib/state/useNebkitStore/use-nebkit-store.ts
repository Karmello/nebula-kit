import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Brand, LIB_PREFIX, Theme } from 'lib/definitions'

import {
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
  DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH,
  DEFAULT_NEBKIT_PROVIDER_BRAND,
  DEFAULT_NEBKIT_PROVIDER_THEME,
  NebkitProviderProps,
} from 'lib/components/utility/NebkitProvider/definitions'

type NebkitState = {
  theme: Theme
  brand: Brand
  borderWidth: NebkitProviderProps['borderWidth']
  borderRadius: NebkitProviderProps['borderRadius']
  setTheme: (theme: Theme) => void
  setBrand: (brand: Brand) => void
  setBorderWidth: (borderWidth: NebkitProviderProps['borderWidth']) => void
  setBorderRadius: (borderRadius: NebkitProviderProps['borderRadius']) => void
}

export const useNebkitStore = create<NebkitState>()(
  persist(
    set => ({
      theme: DEFAULT_NEBKIT_PROVIDER_THEME,
      brand: DEFAULT_NEBKIT_PROVIDER_BRAND,
      borderWidth: DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH,
      borderRadius: DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
      setTheme: theme => set({ theme }),
      setBrand: brand => set({ brand }),
      setBorderWidth: borderWidth => set({ borderWidth }),
      setBorderRadius: borderRadius => set({ borderRadius }),
    }),
    {
      name: `${LIB_PREFIX}.store`,
    }
  )
)
