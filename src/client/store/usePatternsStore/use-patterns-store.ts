import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LIB_PREFIX } from 'lib/constants'
import { PATTERN_CATEGORIES,PATTERNS } from 'client/definitions'

export type PatternsStore = {
  patternCategories: string[]
  setPatternCategories: (patternCategories: string[]) => void
  activePatternId: string
  setActivePatternId: (activePatternId: string) => void
}

export const usePatternsStore = create<PatternsStore>()(
  persist(
    set => ({
      patternCategories: [...PATTERN_CATEGORIES],
      setPatternCategories: patternCategories => set(() => ({ patternCategories })),
      activePatternId: PATTERNS[0].id,
      setActivePatternId: activePatternId => set(() => ({ activePatternId })),
    }),
    {
      name: `${LIB_PREFIX}.patterns`,
    }
  )
)
