import { ComponentMeta } from 'client/definitions'
import { CalloutTag, CalloutProps } from 'lib/components/feedback/Callout/definitions'

import { CALLOUT_PROPS_META } from './props'
import { CALLOUT_EXAMPLES_META } from './examples'

const CALLOUT_META: ComponentMeta<CalloutProps> = {
  overview: {
    title: 'Highlighted content block with a heading, icon, and supporting text.',
    description: [
      'used to draw attention to important information, confirmations, warnings, or errors within a page',
    ],
    composedOf: ['Box', 'Text'],
    rendersAs: CalloutTag,
  },
  props: CALLOUT_PROPS_META,
  examples: CALLOUT_EXAMPLES_META,
}

export default {
  Callout: CALLOUT_META,
}
