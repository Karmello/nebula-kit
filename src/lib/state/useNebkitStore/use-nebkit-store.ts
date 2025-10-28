import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Brand, LIB_PREFIX, ScaleValue, Theme } from 'lib/definitions'

import {
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BORDER_WIDTH_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_THEME,
  NEBKIT_SIZES_MAP,
  NebkitProviderProps,
} from 'lib/components/utility/NebkitProvider/definitions'

type NebkitState = {
  theme: Theme
  brand: Brand
  borderWidthSize: NebkitProviderProps['borderWidthSize']
  borderRadiusSize: NebkitProviderProps['borderRadiusSize']
  borderWidth: ScaleValue
  borderRadius: ScaleValue
  setTheme: (theme: Theme) => void
  setBrand: (brand: Brand) => void
  setBorderWidthSize: (borderWidthSize: NebkitProviderProps['borderWidthSize']) => void
  setBorderRadiusSize: (borderRadiusSize: NebkitProviderProps['borderRadiusSize']) => void
}

export const useNebkitStore = create<NebkitState>()(
  persist(
    set => ({
      theme: DEFAULT_NEBKIT_THEME,
      brand: DEFAULT_NEBKIT_BRAND,
      borderWidthSize: DEFAULT_NEBKIT_BORDER_WIDTH_SIZE,
      borderRadiusSize: DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
      borderWidth: NEBKIT_SIZES_MAP.borderWidthSize[DEFAULT_NEBKIT_BORDER_WIDTH_SIZE || 'md'],
      borderRadius: NEBKIT_SIZES_MAP.borderRadiusSize[DEFAULT_NEBKIT_BORDER_RADIUS_SIZE || 'md'],
      setTheme: theme => set({ theme }),
      setBrand: brand => set({ brand }),
      setBorderWidthSize: borderWidthSize =>
        set({
          borderWidthSize,
          borderWidth: NEBKIT_SIZES_MAP.borderWidthSize[borderWidthSize || 'md'],
        }),
      setBorderRadiusSize: borderRadiusSize =>
        set({
          borderRadiusSize,
          borderRadius: NEBKIT_SIZES_MAP.borderRadiusSize[borderRadiusSize || 'md'],
        }),
    }),
    {
      name: `${LIB_PREFIX}.store`,
    }
  )
)
