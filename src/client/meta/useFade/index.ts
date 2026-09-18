import { UseFadeArgs } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { USE_FADE_CHANGELOG } from './changelog'
import { USE_FADE_EXAMPLES } from './examples'
import { USE_FADE_OVERVIEW } from './overview'
import { USE_FADE_PROPS } from './props'

export const USE_FADE_META = {
  overview: USE_FADE_OVERVIEW,
  props: USE_FADE_PROPS,
  examples: USE_FADE_EXAMPLES,
  changelog: USE_FADE_CHANGELOG,
} satisfies DocMeta<UseFadeArgs>
