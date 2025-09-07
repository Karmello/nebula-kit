import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { DEFAULT_BORDER_RADIUS, DEFAULT_THEME, LIB_PREFIX, ScaleValue, Theme } from 'lib/definitions'

type LibState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  borderRadius: ScaleValue | string
  setBorderRadius: (borderRadius: ScaleValue | string) => void
}

export const useLibStore = create<LibState>()(
  persist(
    set => ({
      theme: DEFAULT_THEME,
      setTheme: theme => set({ theme }),
      borderRadius: DEFAULT_BORDER_RADIUS,
      setBorderRadius: borderRadius => set({ borderRadius }),
    }),
    {
      name: `${LIB_PREFIX}.theme`,
    }
  )
)
