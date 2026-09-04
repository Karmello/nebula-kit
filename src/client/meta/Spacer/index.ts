import { SpacerProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { SPACER_CHANGELOG } from './changelog'
import { SPACER_EXAMPLES } from './examples'
import { SPACER_OVERVIEW } from './overview'
import { SPACER_PROPS } from './props'

export const SPACER_META = {
  overview: SPACER_OVERVIEW,
  props: SPACER_PROPS,
  examples: SPACER_EXAMPLES,
  changelog: SPACER_CHANGELOG,
} satisfies DocMeta<SpacerProps>
