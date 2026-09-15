import { TooltipProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { TOOLTIP_CHANGELOG } from './changelog'
import { TOOLTIP_EXAMPLES } from './examples'
import { TOOLTIP_OVERVIEW } from './overview'
import { TOOLTIP_PROPS } from './props'

export const TOOLTIP_META = {
  overview: TOOLTIP_OVERVIEW,
  props: TOOLTIP_PROPS,
  examples: TOOLTIP_EXAMPLES,
  changelog: TOOLTIP_CHANGELOG,
} satisfies DocMeta<TooltipProps>
