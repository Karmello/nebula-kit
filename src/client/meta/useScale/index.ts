import { DocMeta } from 'client/definitions'

import { USE_SCALE_CHANGELOG } from './changelog'
import { USE_SCALE_EXAMPLES } from './examples'
import { USE_SCALE_OVERVIEW } from './overview'
import { USE_SCALE_PROPS, type UseScaleDocArgs } from './props'

export const USE_SCALE_META = {
  overview: USE_SCALE_OVERVIEW,
  props: USE_SCALE_PROPS,
  examples: USE_SCALE_EXAMPLES,
  changelog: USE_SCALE_CHANGELOG,
} satisfies DocMeta<UseScaleDocArgs>
