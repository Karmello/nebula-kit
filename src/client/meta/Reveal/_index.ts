import { ComponentMeta } from 'client/definitions'
import { RevealProps } from 'lib/components'

import { REVEAL_PROPS_META } from './props'
import { REVEAL_EXAMPLES_META } from './examples'
import { RevealTag } from 'lib/components/containers/Reveal/definitions'

const REVEAL_META: ComponentMeta<RevealProps> = {
  overview: {
    title: 'Expandable container for showing and hiding content.',
    description: ['toggles visibility of its content with smooth expand and collapse behavior'],
    rendersAs: RevealTag,
    composedOf: ['Box', 'Flex', 'Button', 'Animate'],
  },
  props: REVEAL_PROPS_META,
  examples: REVEAL_EXAMPLES_META,
}

export default {
  Reveal: REVEAL_META,
}
