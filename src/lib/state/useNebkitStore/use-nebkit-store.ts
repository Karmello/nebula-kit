import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Brand, LIB_PREFIX, Theme } from 'lib/definitions'

import {
  DEFAULT_NEBKIT_PROVIDER_BRAND,
  DEFAULT_NEBKIT_PROVIDER_THEME,
} from 'lib/components/utility/NebkitProvider/definitions'

type NebkitState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  brand: Brand
  setBrand: (brand: Brand) => void
}

export const useNebkitStore = create<NebkitState>()(
  persist(
    set => ({
      theme: DEFAULT_NEBKIT_PROVIDER_THEME,
      setTheme: theme => set({ theme }),
      brand: DEFAULT_NEBKIT_PROVIDER_BRAND,
      setBrand: brand => set({ brand }),
    }),
    {
      name: `${LIB_PREFIX}.store`,
    }
  )
)
