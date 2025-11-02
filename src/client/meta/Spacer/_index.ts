import { ComponentMeta } from 'client/definitions'
import { SpacerProps } from 'lib/components/layout/Spacer/definitions'

import { SPACER_EXAMPLES_META } from './examples'
import { SPACER_PROPS_META } from './props'

const SPACER_META: ComponentMeta<SpacerProps> = {
  overview: {
    plan: 'free',
    title: 'Layout component that introduces controlled empty space between elements.',
    description: [
      'provides consistent vertical spacing between elements',
      'improves readability by preventing content from feeling crowded',
    ],
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: SPACER_PROPS_META,
  examples: SPACER_EXAMPLES_META,
}

export default {
  Spacer: SPACER_META,
}
