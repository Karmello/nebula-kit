import { UseRotateArgs } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { USE_ROTATE_CHANGELOG } from './changelog'
import { USE_ROTATE_EXAMPLES } from './examples'
import { USE_ROTATE_OVERVIEW } from './overview'
import { USE_ROTATE_PROPS } from './props'

export const USE_ROTATE_META = {
  overview: USE_ROTATE_OVERVIEW,
  props: USE_ROTATE_PROPS,
  examples: USE_ROTATE_EXAMPLES,
  changelog: USE_ROTATE_CHANGELOG,
} satisfies DocMeta<UseRotateArgs>
