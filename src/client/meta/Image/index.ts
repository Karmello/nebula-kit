import { ImageProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { IMAGE_CHANGELOG } from './changelog'
import { IMAGE_EXAMPLES } from './examples'
import { IMAGE_OVERVIEW } from './overview'
import { IMAGE_PROPS } from './props'

export const IMAGE_META = {
  overview: IMAGE_OVERVIEW,
  props: IMAGE_PROPS,
  examples: IMAGE_EXAMPLES,
  changelog: IMAGE_CHANGELOG,
} satisfies DocMeta<ImageProps>
