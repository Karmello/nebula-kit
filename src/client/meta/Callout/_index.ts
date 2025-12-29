import { ComponentMeta } from 'client/definitions'
import { CALLOUT_TAGS, CalloutProps } from 'lib/components/core/feedback/Callout'

import { CALLOUT_PROPS_META } from './props'
import { CALLOUT_EXAMPLES_META } from './examples'

const CALLOUT_META: ComponentMeta<CalloutProps> = {
  overview: {
    bundle: 'core',
    title: 'Semantic message block for emphasizing important information.',
    description: [
      'used to draw attention to important information, confirmations, warnings or errors within a page',
    ],
    composedOf: ['Box', 'Text', 'Spacer'],
    topLevelTags: CALLOUT_TAGS,
  },
  props: CALLOUT_PROPS_META,
  examples: CALLOUT_EXAMPLES_META,
  changelog: {
    '0.1.0': ['Released'],
  },
}

export default {
  Callout: CALLOUT_META,
}
