import { ComponentMeta } from 'client/definitions'

import { REVEAL_TAGS, type RevealProps } from '../definitions'
import { REVEAL_PROPS_META } from './props'
import { REVEAL_EXAMPLES_META } from './examples'

const REVEAL_META: ComponentMeta<RevealProps> = {
  overview: {
    bundle: 'core',
    title: 'Disclosure component for toggling expandable content.',
    features: [
      'provides a labeled control for toggling content visibility',
      'animates expand and collapse using measured height for smooth transitions',
    ],
    topLevelTags: REVEAL_TAGS,
    composedOf: ['Box', 'Flex', 'Button', 'Resize'],
  },
  props: REVEAL_PROPS_META,
  examples: REVEAL_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  Reveal: REVEAL_META,
}
