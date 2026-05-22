import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { PATTERNS, PATTERN_CATEGORIES } from 'client/definitions'
import { LIB_PREFIX } from 'lib/definitions'

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
