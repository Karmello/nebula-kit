import { BoxGroupProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { BOX_GROUP_CHANGELOG } from './changelog'
import { BOX_GROUP_EXAMPLES } from './examples'
import { BOX_GROUP_OVERVIEW } from './overview'
import { BOX_GROUP_PROPS } from './props'

export const BOX_GROUP_META = {
  overview: BOX_GROUP_OVERVIEW,
  props: BOX_GROUP_PROPS,
  examples: BOX_GROUP_EXAMPLES,
  changelog: BOX_GROUP_CHANGELOG,
} satisfies DocMeta<BoxGroupProps>
