import { CheckboxProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { CHECKBOX_CHANGELOG } from './changelog'
import { CHECKBOX_EXAMPLES } from './examples'
import { CHECKBOX_OVERVIEW } from './overview'
import { CHECKBOX_PROPS } from './props'

export const CHECKBOX_META = {
  overview: CHECKBOX_OVERVIEW,
  props: CHECKBOX_PROPS,
  examples: CHECKBOX_EXAMPLES,
  changelog: CHECKBOX_CHANGELOG,
} satisfies DocMeta<CheckboxProps>
