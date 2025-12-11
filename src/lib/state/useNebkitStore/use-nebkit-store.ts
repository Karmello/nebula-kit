import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Color, LIB_PREFIX, Theme } from 'lib/definitions'

import {
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_THEME,
  NEBKIT_SIZES_MAP,
  NebkitProviderProps,
} from 'lib/components/core/utility/NebkitProvider/definitions'

type NebkitState = {
  theme: Theme
  brand: Color
  borderRadiusSize: NebkitProviderProps['borderRadiusSize']
  borderRadius: string
  setTheme: (theme: Theme) => void
  setBrand: (brand: Color) => void
  setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) => void
}

export const useNebkitStore = create<NebkitState>()(
  persist(
    set => ({
      theme: DEFAULT_NEBKIT_THEME,
      brand: DEFAULT_NEBKIT_BRAND,
      borderRadiusSize: DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
      borderRadius: NEBKIT_SIZES_MAP.borderRadiusSize[DEFAULT_NEBKIT_BORDER_RADIUS_SIZE || 'md'],
      setTheme: theme => set({ theme }),
      setBrand: brand => set({ brand }),
      setBorderRadiusSize: borderRadiusSize =>
        set({
          borderRadiusSize,
          borderRadius: NEBKIT_SIZES_MAP.borderRadiusSize[borderRadiusSize || 'md'],
        }),
    }),
    {
      name: `${LIB_PREFIX}.lib`,
    }
  )
)
