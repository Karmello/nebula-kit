import { MarkerListProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { MARKER_LIST_CHANGELOG } from './changelog'
import { MARKER_LIST_EXAMPLES } from './examples'
import { MARKER_LIST_OVERVIEW } from './overview'
import { MARKER_LIST_PROPS } from './props'

export const MARKER_LIST_META = {
  overview: MARKER_LIST_OVERVIEW,
  props: MARKER_LIST_PROPS,
  examples: MARKER_LIST_EXAMPLES,
  changelog: MARKER_LIST_CHANGELOG,
} satisfies ComponentMeta<MarkerListProps>
