import { HorizontalRuleProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { HORIZONTAL_RULE_CHANGELOG } from './changelog'
import { HORIZONTAL_RULE_EXAMPLES } from './examples'
import { HORIZONTAL_RULE_OVERVIEW } from './overview'
import { HORIZONTAL_RULE_PROPS } from './props'

export const HORIZONTAL_RULE_META = {
  overview: HORIZONTAL_RULE_OVERVIEW,
  props: HORIZONTAL_RULE_PROPS,
  examples: HORIZONTAL_RULE_EXAMPLES,
  changelog: HORIZONTAL_RULE_CHANGELOG,
} satisfies DocMeta<HorizontalRuleProps>
