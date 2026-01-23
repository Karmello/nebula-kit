import { LoaderProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { LOADER_PROPS_META } from './props'
import { LOADER_EXAMPLES_META } from './examples'

const LOADER_META: ComponentMeta<LoaderProps> = {
  overview: {
    bundle: 'core',
    title: 'Circular indicator for loading states.',
    features: ['displays a minimal circular spinner to indicate an ongoing operation'],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: LOADER_PROPS_META,
  examples: LOADER_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  Loader: LOADER_META,
}
