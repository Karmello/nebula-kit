import type { IconProps } from 'lib/components/core/Icon/types'
import { DocMeta } from 'client/definitions'

import { ICON_CHANGELOG } from './changelog'
import { ICON_EXAMPLES } from './examples'
import { ICON_OVERVIEW } from './overview'
import { ICON_PROPS } from './props'

export const ICON_META = {
  overview: ICON_OVERVIEW,
  props: ICON_PROPS,
  examples: ICON_EXAMPLES,
  changelog: ICON_CHANGELOG,
} satisfies DocMeta<IconProps>
