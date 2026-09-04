import type { SelectOptionProps } from 'lib/components/core/Select/slots/SelectOption/types'
import { DocMeta } from 'client/definitions'

import { SELECT_OPTION_OVERVIEW } from './overview'
import { SELECT_OPTION_PROPS } from './props'

export const SELECT_OPTION_META = {
  overview: SELECT_OPTION_OVERVIEW,
  props: SELECT_OPTION_PROPS,
} satisfies DocMeta<SelectOptionProps>
