import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX, THEME_DEFAULT, Theme } from 'lib-2/definitions'

type LibState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useLibStore = create<LibState>()(
  persist(
    set => ({
      theme: THEME_DEFAULT,
      setTheme: theme => set({ theme }),
    }),
    {
      name: `${LIB_PREFIX}.theme`,
    }
  )
)
