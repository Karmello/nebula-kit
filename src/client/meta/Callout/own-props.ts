import { ComponentMeta } from 'client/definitions'

import {
  CALLOUT_CONFIG,
  CalloutOwnProps,
  DEFAULT_CALLOUT_INTENT,
} from 'lib/components/feedback/Callout/definitions'

export default [
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
] as ComponentMeta<CalloutOwnProps>['ownProps']
