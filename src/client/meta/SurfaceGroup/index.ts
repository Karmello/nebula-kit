import { SurfaceGroupProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { SURFACE_GROUP_CHANGELOG } from './changelog'
import { SURFACE_GROUP_EXAMPLES } from './examples'
import { SURFACE_GROUP_OVERVIEW } from './overview'
import { SURFACE_GROUP_PROPS } from './props'

export const SURFACE_GROUP_META = {
  overview: SURFACE_GROUP_OVERVIEW,
  props: SURFACE_GROUP_PROPS,
  examples: SURFACE_GROUP_EXAMPLES,
  changelog: SURFACE_GROUP_CHANGELOG,
} satisfies DocMeta<SurfaceGroupProps>
