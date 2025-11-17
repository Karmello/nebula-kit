import { LoaderProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { LOADER_PROPS_META } from './props'
import { LOADER_EXAMPLES_META } from './examples'

const LOADER_META: ComponentMeta<LoaderProps> = {
  overview: {
    plan: 'free',
    title: 'Circular indicator for loading states.',
    description: ['shows a minimal circular spinner to indicate that something is in progress'],
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: LOADER_PROPS_META,
  examples: LOADER_EXAMPLES_META,
}

export default {
  Loader: LOADER_META,
}
