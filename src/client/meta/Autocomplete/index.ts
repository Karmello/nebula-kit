import { AutocompleteProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { AUTOCOMPLETE_CHANGELOG } from './changelog'
import { AUTOCOMPLETE_EXAMPLES } from './examples'
import { AUTOCOMPLETE_OVERVIEW } from './overview'
import { AUTOCOMPLETE_PROPS } from './props'

export const AUTOCOMPLETE_META = {
  overview: AUTOCOMPLETE_OVERVIEW,
  props: AUTOCOMPLETE_PROPS,
  examples: AUTOCOMPLETE_EXAMPLES,
  changelog: AUTOCOMPLETE_CHANGELOG,
} satisfies DocMeta<AutocompleteProps>
