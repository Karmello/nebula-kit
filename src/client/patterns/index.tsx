import { Pattern as PatternDef } from './definitions'
import { Pattern as StylingIsland } from './jsx/styling-island'
import stylingIslandCode from './jsx/styling-island.tsx?raw'

export const PATTERNS: Array<PatternDef> = [
  {
    id: 'styling-island',
    category: 'Basic',
    title: 'Styling Island',
    description: 'A region with its own theme and brand that all descendants follow automatically.',
    component: StylingIsland,
    code: stylingIslandCode,
  },
]

export * from './definitions'
