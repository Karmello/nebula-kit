import {
  Callout,
  CALLOUT_INHERITED_PROPS,
  CalloutOwnProps,
  CALLOUT_CONFIG,
  Spacer,
  DEFAULT_CALLOUT_INTENT,
  CalloutElem,
} from 'lib/components'

import { ComponentMeta } from 'client/definitions'

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
    rendersAs: CalloutElem,
  },
  ownProps: [
    {
      name: 'content',
      description: 'A text string displayed as the main body of the callout.',
      options: ['string'],
      isRequired: true,
      isResponsive: false,
    },
    {
      name: 'heading',
      description:
        'Text displayed as the title of the callout. Overrides the default heading provided for each intent.',
      options: [
        Object.values(CALLOUT_CONFIG)
          .map(o => o.heading)
          .join(', '),
      ],
      defaultValue: CALLOUT_CONFIG[DEFAULT_CALLOUT_INTENT].heading,
      isRequired: false,
      isResponsive: false,
    },
  ],
  examples: [
    {
      description: 'Highlights neutral or contextual information for the user.',
      jsx: (
        <>
          <Callout content="Callout text content" />
          <Spacer blockSize={10} />
          <Callout content="Callout text content" variant="outline" />
        </>
      ),
    },

    {
      description: 'Indicates a positive outcome or confirmation.',
      jsx: (
        <>
          <Callout content="Callout text content" intent="success" />
          <Spacer blockSize={10} />
          <Callout content="Callout text content" variant="outline" intent="success" />
        </>
      ),
    },
    {
      description: 'Draws attention to a caution or potential issue.',
      jsx: (
        <>
          <Callout content="Callout text content" intent="warning" />
          <Spacer blockSize={10} />
          <Callout content="Callout text content" variant="outline" intent="warning" />
        </>
      ),
    },
    {
      description: 'Signals an error or critical problem that requires attention.',
      jsx: (
        <>
          <Callout content="Callout text content" intent="danger" />
          <Spacer blockSize={10} />
          <Callout content="Callout text content" variant="outline" intent="danger" />
        </>
      ),
    },
  ],
}

export default {
  Callout: CALLOUT_META,
}
