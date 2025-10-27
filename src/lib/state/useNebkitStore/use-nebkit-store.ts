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
  setTheme: (theme: Theme) => void
  brand: Brand
  setBrand: (brand: Brand) => void
  borderWidth: NebkitProviderProps['borderWidth']
  setBorderWidth: (borderWidth: NebkitProviderProps['borderWidth']) => void
  borderRadius: NebkitProviderProps['borderRadius']
  setBorderRadius: (borderRadius: NebkitProviderProps['borderRadius']) => void
}

export const useNebkitStore = create<NebkitState>()(
  persist(
    set => ({
      theme: DEFAULT_NEBKIT_PROVIDER_THEME,
      setTheme: theme => set({ theme }),
      brand: DEFAULT_NEBKIT_PROVIDER_BRAND,
      setBrand: brand => set({ brand }),
      borderWidth: DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH,
      setBorderWidth: borderWidth => set({ borderWidth }),
      borderRadius: DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
      setBorderRadius: borderRadius => set({ borderRadius }),
    }),
    {
      name: `${LIB_PREFIX}.store`,
    }
  )
)
