import { LinkProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { LINK_CHANGELOG } from './changelog'
import { LINK_EXAMPLES } from './examples'
import { LINK_OVERVIEW } from './overview'
import { LINK_PROPS } from './props'

export const LINK_META = {
  overview: LINK_OVERVIEW,
  examples: LINK_EXAMPLES,
  props: LINK_PROPS,
  changelog: LINK_CHANGELOG,
} satisfies DocMeta<LinkProps>
