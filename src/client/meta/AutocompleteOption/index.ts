import type { AutocompleteOptionProps } from 'lib/components/pro/Autocomplete/slots/AutocompleteOption/types'
import { ComponentMeta } from 'client/definitions'

import { AUTOCOMPLETE_OPTION_OVERVIEW } from './overview'
import { AUTOCOMPLETE_OPTION_PROPS } from './props'

export const AUTOCOMPLETE_OPTION_META = {
  overview: AUTOCOMPLETE_OPTION_OVERVIEW,
  props: AUTOCOMPLETE_OPTION_PROPS,
} satisfies ComponentMeta<AutocompleteOptionProps>
