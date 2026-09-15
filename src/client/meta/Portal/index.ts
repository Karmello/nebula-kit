import type { PortalProps } from 'lib/components/pro/Portal/types'
import { DocMeta } from 'client/definitions'

import { PORTAL_CHANGELOG } from './changelog'
import { PORTAL_EXAMPLES } from './examples'
import { PORTAL_OVERVIEW } from './overview'
import { PORTAL_PROPS } from './props'

export const PORTAL_META = {
  overview: PORTAL_OVERVIEW,
  props: PORTAL_PROPS,
  examples: PORTAL_EXAMPLES,
  changelog: PORTAL_CHANGELOG,
} satisfies DocMeta<PortalProps>
