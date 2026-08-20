import { CALLOUT_TAGS, TSHIRT_SIZES } from 'lib/constants'
import { CalloutProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import {
  CALLOUT_STATUSES,
  CALLOUT_VARIANTS,
  DEFAULT_CALLOUT_INTENT,
  DEFAULT_CALLOUT_SIZE,
  DEFAULT_CALLOUT_STATUS,
  DEFAULT_CALLOUT_VARIANT,
} from '../definitions'
import { CALLOUT_CHANGELOG } from './changelog'
import { CALLOUT_EXAMPLES } from './examples'

export const CALLOUT_META = {
  Callout: {
    overview: {
      bundle: 'core',
      title: 'Semantic message block for emphasizing important information.',
      features: ['used to draw attention to important information, confirmations, warnings or errors within a page'],
      composedOf: ['Box', 'Text', 'Spacer', 'Title'],
      exposedTags: CALLOUT_TAGS,
    },
    props: {
      content: {
        options: ['string'],
        isRequired: true,
        description: 'A text string displayed as the main body of the Callout.',
      },
      heading: {
        description:
          'Text displayed as the title of the Callout. Overrides the default heading associated with the selected status.',
        options: ['string'],
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_CALLOUT_INTENT),
      },
      size: {
        options: TSHIRT_SIZES,
        defaultValue: DEFAULT_CALLOUT_SIZE,
        description: 'Controls overall proportions - adjusting heading size and spacings.',
      },
      status: {
        options: CALLOUT_STATUSES,
        defaultValue: DEFAULT_CALLOUT_STATUS,
        description: 'Defines the type of message being communicated.',
      },
      tag: BOX_META.Box.props.tag,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      variant: {
        ...BOX_META.Box.props.variant,
        options: Object.values(CALLOUT_VARIANTS),
        defaultValue: String(DEFAULT_CALLOUT_VARIANT),
      },
    },
    examples: CALLOUT_EXAMPLES,
    changelog: CALLOUT_CHANGELOG,
  } satisfies ComponentMeta<CalloutProps>,
}
