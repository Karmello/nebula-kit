import { MarkupProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { MARKUP_CHANGELOG } from './changelog'
import { MARKUP_EXAMPLES } from './examples'
import { MARKUP_OVERVIEW } from './overview'
import { MARKUP_PROPS } from './props'

export const MARKUP_META = {
  overview: MARKUP_OVERVIEW,
  props: MARKUP_PROPS,
  examples: MARKUP_EXAMPLES,
  changelog: MARKUP_CHANGELOG,
} satisfies ComponentMeta<MarkupProps>
