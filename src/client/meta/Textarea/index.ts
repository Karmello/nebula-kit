import { TextareaProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { TEXTAREA_CHANGELOG } from './changelog'
import { TEXTAREA_EXAMPLES } from './examples'
import { TEXTAREA_OVERVIEW } from './overview'
import { TEXTAREA_PROPS } from './props'

export const TEXTAREA_META = {
  overview: TEXTAREA_OVERVIEW,
  props: TEXTAREA_PROPS,
  examples: TEXTAREA_EXAMPLES,
  changelog: TEXTAREA_CHANGELOG,
} satisfies DocMeta<TextareaProps>
