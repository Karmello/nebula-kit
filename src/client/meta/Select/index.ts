import { SelectProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { SELECT_CHANGELOG } from './changelog'
import { SELECT_EXAMPLES } from './examples'
import { SELECT_OVERVIEW } from './overview'
import { SELECT_PROPS } from './props'

export const SELECT_META = {
  overview: SELECT_OVERVIEW,
  props: SELECT_PROPS,
  examples: SELECT_EXAMPLES,
  changelog: SELECT_CHANGELOG,
} satisfies DocMeta<SelectProps>
