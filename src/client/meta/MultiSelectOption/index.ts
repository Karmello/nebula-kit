import type { MultiSelectOptionProps } from 'lib/components/pro/MultiSelect/slots/MultiSelectOption/types'
import { DocMeta } from 'client/definitions'

import { MULTI_SELECT_OPTION_OVERVIEW } from './overview'
import { MULTI_SELECT_OPTION_PROPS } from './props'

export const MULTI_SELECT_OPTION_META = {
  overview: MULTI_SELECT_OPTION_OVERVIEW,
  props: MULTI_SELECT_OPTION_PROPS,
} satisfies DocMeta<MultiSelectOptionProps>
