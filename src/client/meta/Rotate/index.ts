import { RotateProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { ROTATE_CHANGELOG } from './changelog'
import { ROTATE_EXAMPLES } from './examples'
import { ROTATE_OVERVIEW } from './overview'
import { ROTATE_PROPS } from './props'

export const ROTATE_META = {
  overview: ROTATE_OVERVIEW,
  props: ROTATE_PROPS,
  examples: ROTATE_EXAMPLES,
  changelog: ROTATE_CHANGELOG,
} satisfies DocMeta<RotateProps>
