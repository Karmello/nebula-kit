import { TextProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { TEXT_CHANGELOG } from './changelog'
import { TEXT_EXAMPLES } from './examples'
import { TEXT_OVERVIEW } from './overview'
import { TEXT_PROPS } from './props'

export const TEXT_META = {
  overview: TEXT_OVERVIEW,
  props: TEXT_PROPS,
  examples: TEXT_EXAMPLES,
  changelog: TEXT_CHANGELOG,
} satisfies DocMeta<TextProps>
