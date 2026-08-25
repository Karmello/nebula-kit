import { VirtualListProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { VIRTUAL_LIST_CHANGELOG } from './changelog'
import { VIRTUAL_LIST_EXAMPLES } from './examples'
import { VIRTUAL_LIST_OVERVIEW } from './overview'
import { VIRTUAL_LIST_PROPS } from './props'

export const VIRTUAL_LIST_META = {
  overview: VIRTUAL_LIST_OVERVIEW,
  props: VIRTUAL_LIST_PROPS,
  examples: VIRTUAL_LIST_EXAMPLES,
  changelog: VIRTUAL_LIST_CHANGELOG,
} satisfies DocMeta<VirtualListProps>
