import { DocMeta } from 'client/definitions'

import { USE_SLIDE_CHANGELOG } from './changelog'
import { USE_SLIDE_EXAMPLES } from './examples'
import { USE_SLIDE_OVERVIEW } from './overview'
import { USE_SLIDE_PROPS, type UseSlideDocArgs } from './props'

export const USE_SLIDE_META = {
  overview: USE_SLIDE_OVERVIEW,
  props: USE_SLIDE_PROPS,
  examples: USE_SLIDE_EXAMPLES,
  changelog: USE_SLIDE_CHANGELOG,
} satisfies DocMeta<UseSlideDocArgs>
