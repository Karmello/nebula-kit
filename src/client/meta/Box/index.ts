import type { BoxProps } from 'lib/components/core/Box'
import { DocMeta } from 'client/definitions'

import { BOX_CHANGELOG } from './changelog'
import { BOX_EXAMPLES } from './examples'
import { BOX_OVERVIEW } from './overview'
import { BOX_PROPS } from './props'

export const BOX_META = {
  overview: BOX_OVERVIEW,
  props: BOX_PROPS,
  examples: BOX_EXAMPLES,
  changelog: BOX_CHANGELOG,
} satisfies DocMeta<BoxProps>
