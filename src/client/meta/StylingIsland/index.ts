import type { StylingIslandProps } from 'lib/components/core/StylingIsland/types'
import { DocMeta } from 'client/definitions'

import { STYLING_ISLAND_CHANGELOG } from './changelog'
import { STYLING_ISLAND_EXAMPLES } from './examples'
import { STYLING_ISLAND_OVERVIEW } from './overview'
import { STYLING_ISLAND_PROPS } from './props'

export const STYLING_ISLAND_META = {
  overview: STYLING_ISLAND_OVERVIEW,
  props: STYLING_ISLAND_PROPS,
  examples: STYLING_ISLAND_EXAMPLES,
  changelog: STYLING_ISLAND_CHANGELOG,
  hideExamplesThemeToggle: true,
} satisfies DocMeta<StylingIslandProps>
