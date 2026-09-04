import { SplitViewProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { SPLIT_VIEW_CHANGELOG } from './changelog'
import { SPLIT_VIEW_EXAMPLES } from './examples'
import { SPLIT_VIEW_OVERVIEW } from './overview'
import { SPLIT_VIEW_PROPS } from './props'

export const SPLIT_VIEW_META = {
  hideExamplesThemeToggle: true,
  overview: SPLIT_VIEW_OVERVIEW,
  props: SPLIT_VIEW_PROPS,
  examples: SPLIT_VIEW_EXAMPLES,
  changelog: SPLIT_VIEW_CHANGELOG,
} satisfies DocMeta<SplitViewProps>
