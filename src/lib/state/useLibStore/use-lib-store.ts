import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX, ScaleValue, Theme } from 'lib/definitions'

import {
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
  DEFAULT_NEBKIT_PROVIDER_THEME,
} from 'lib/components/utility/NebkitProvider/definitions'

type LibState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  borderRadius: ScaleValue | string
  setBorderRadius: (borderRadius: ScaleValue | string) => void
}

export const useLibStore = create<LibState>()(
  persist(
    set => ({
      theme: DEFAULT_NEBKIT_PROVIDER_THEME,
      setTheme: theme => set({ theme }),
      borderRadius: DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
      setBorderRadius: borderRadius => set({ borderRadius }),
    }),
    {
      name: `${LIB_PREFIX}.theme`,
    }
  )
)
