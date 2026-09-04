import { ResizeProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { RESIZE_CHANGELOG } from './changelog'
import { RESIZE_EXAMPLES } from './examples'
import { RESIZE_OVERVIEW } from './overview'
import { RESIZE_PROPS } from './props'

export const RESIZE_META = {
  overview: RESIZE_OVERVIEW,
  props: RESIZE_PROPS,
  examples: RESIZE_EXAMPLES,
  changelog: RESIZE_CHANGELOG,
} satisfies DocMeta<ResizeProps>
