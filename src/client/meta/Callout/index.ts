import { CalloutProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { CALLOUT_CHANGELOG } from './changelog'
import { CALLOUT_EXAMPLES } from './examples'
import { CALLOUT_OVERVIEW } from './overview'
import { CALLOUT_PROPS } from './props'

export const CALLOUT_META = {
  overview: CALLOUT_OVERVIEW,
  props: CALLOUT_PROPS,
  examples: CALLOUT_EXAMPLES,
  changelog: CALLOUT_CHANGELOG,
} satisfies ComponentMeta<CalloutProps>
