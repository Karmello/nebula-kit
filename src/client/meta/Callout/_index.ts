import { ComponentMeta } from 'client/definitions'

import {
  CALLOUT_INHERITED_PROPS,
  CalloutTag,
  CalloutOwnProps,
} from 'lib/components/feedback/Callout/definitions'

import ownProps from './own-props'
import examples from './examples'

const CALLOUT_META: ComponentMeta<CalloutOwnProps> = {
  overview: {
    description:
      'A highlighted content block with a heading, icon, and supporting text, used to draw attention to important information, confirmations, warnings, or errors within a page.',
    role: [
      'emphasizes key information or status within the content flow',
      'provides clear visual cues through color, icon, and heading',
      'helps users quickly distinguish between neutral notes, successes, warnings, and errors',
    ],
    behavior: [
      'requires content text',
      'provides an automatic icon for each intent',
      'renders a heading with h5 typography',
    ],
    byDefault: [
      'renders as a <div> element',
      'uses the info intent',
      'uses the solid variant',
      'applies padding of 10',
    ],
    examplesOfUse: [
      'highlighting important information in documentation or forms',
      'displaying a success message after a completed action',
      'warning users about potential issues or side effects',
      'showing error details that require immediate attention',
    ],
    composedOf: CALLOUT_INHERITED_PROPS,
    rendersAs: CalloutTag,
  },
  ownProps,
  examples,
}

export default {
  Callout: CALLOUT_META,
}
