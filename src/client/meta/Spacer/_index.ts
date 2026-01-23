import { ComponentMeta } from 'client/definitions'
import { SpacerProps } from 'lib/components'

import { SPACER_EXAMPLES_META } from './examples'
import { SPACER_PROPS_META } from './props'

const SPACER_META: ComponentMeta<SpacerProps> = {
  overview: {
    bundle: 'core',
    title: 'Layout component that introduces controlled empty space between elements.',
    features: [
      'provides consistent vertical spacing between elements',
      'improves readability by preventing content from feeling crowded',
    ],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: SPACER_PROPS_META,
  examples: SPACER_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  Spacer: SPACER_META,
}
