import { ScaleProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { SCALE_CHANGELOG } from './changelog'
import { SCALE_EXAMPLES } from './examples'
import { SCALE_OVERVIEW } from './overview'
import { SCALE_PROPS } from './props'

export const SCALE_META = {
  overview: SCALE_OVERVIEW,
  props: SCALE_PROPS,
  examples: SCALE_EXAMPLES,
  changelog: SCALE_CHANGELOG,
} satisfies DocMeta<ScaleProps>
