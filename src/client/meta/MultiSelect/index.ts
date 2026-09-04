import { MultiSelectProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { MULTI_SELECT_CHANGELOG } from './changelog'
import { MULTI_SELECT_EXAMPLES } from './examples'
import { MULTI_SELECT_OVERVIEW } from './overview'
import { MULTI_SELECT_PROPS } from './props'

export const MULTI_SELECT_META = {
  overview: MULTI_SELECT_OVERVIEW,
  props: MULTI_SELECT_PROPS,
  examples: MULTI_SELECT_EXAMPLES,
  changelog: MULTI_SELECT_CHANGELOG,
} satisfies DocMeta<MultiSelectProps>
