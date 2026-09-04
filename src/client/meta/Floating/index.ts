import { FloatingProps } from 'lib/components/pro/Floating/types'
import { DocMeta } from 'client/definitions'

import { FLOATING_CHANGELOG } from './changelog'
import { FLOATING_EXAMPLES } from './examples'
import { FLOATING_OVERVIEW } from './overview'
import { FLOATING_PROPS } from './props'

export const FLOATING_META = {
  overview: FLOATING_OVERVIEW,
  props: FLOATING_PROPS,
  examples: FLOATING_EXAMPLES,
  changelog: FLOATING_CHANGELOG,
} satisfies DocMeta<FloatingProps>
