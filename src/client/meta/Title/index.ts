import { TitleProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { TITLE_CHANGELOG } from './changelog'
import { TITLE_EXAMPLES } from './examples'
import { TITLE_OVERVIEW } from './overview'
import { TITLE_PROPS } from './props'

export const TITLE_META = {
  overview: TITLE_OVERVIEW,
  props: TITLE_PROPS,
  examples: TITLE_EXAMPLES,
  changelog: TITLE_CHANGELOG,
} satisfies DocMeta<TitleProps>
