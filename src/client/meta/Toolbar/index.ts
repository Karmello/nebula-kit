import { ToolbarProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { TOOLBAR_CHANGELOG } from './changelog'
import { TOOLBAR_EXAMPLES } from './examples'
import { TOOLBAR_OVERVIEW } from './overview'
import { TOOLBAR_PROPS } from './props'

export const TOOLBAR_META = {
  overview: TOOLBAR_OVERVIEW,
  props: TOOLBAR_PROPS,
  examples: TOOLBAR_EXAMPLES,
  changelog: TOOLBAR_CHANGELOG,
} satisfies DocMeta<ToolbarProps>
