import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Language, LIB_PREFIX, Theme } from 'lib/definitions'

type LibState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  lang: Language
  setLang: (lang: Language) => void
}

export const useLibStore = create<LibState>()(
  persist(
    set => ({
      theme: Theme.DEFAULT,
      setTheme: theme => set({ theme }),
      lang: Language.DEFAULT,
      setLang: lang => set({ lang }),
    }),
    {
      name: `${LIB_PREFIX}.theme`,
    }
  )
)
