import { DividerProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { DIVIDER_CHANGELOG } from './changelog'
import { DIVIDER_EXAMPLES } from './examples'
import { DIVIDER_OVERVIEW } from './overview'
import { DIVIDER_PROPS } from './props'

export const DIVIDER_META = {
  overview: DIVIDER_OVERVIEW,
  props: DIVIDER_PROPS,
  examples: DIVIDER_EXAMPLES,
  changelog: DIVIDER_CHANGELOG,
} satisfies DocMeta<DividerProps>
