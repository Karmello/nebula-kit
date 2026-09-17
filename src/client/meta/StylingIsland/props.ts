import { BOX_COLORS } from 'lib/components/core/Box'
import { BOX_THEMES } from 'lib/components/core/Box/constants'
import type { StylingIslandProps } from 'lib/components/core/StylingIsland/types'
import type { DocProp } from 'client/definitions'

export const STYLING_ISLAND_PROPS: Record<keyof StylingIslandProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered within the local styling boundary.',
  },
  theme: {
    options: BOX_THEMES,
    isResponsive: true,
    description:
      'Sets a local theme boundary for the subtree. Supports explicit themes, the global application theme or the opposite of the global application theme.',
    group: 'appearance',
  },
  brand: {
    options: BOX_COLORS,
    description: 'Sets a local brand color context for the subtree.',
    group: 'appearance',
  },
}
