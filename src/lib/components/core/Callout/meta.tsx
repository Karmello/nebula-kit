import { CALLOUT_TAGS } from 'lib/constants'
import { Callout, CalloutProps, Spacer } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import {
  CALLOUT_SIZES,
  CALLOUT_STATUSES,
  CALLOUT_VARIANTS,
  DEFAULT_CALLOUT_INTENT,
  DEFAULT_CALLOUT_SIZE,
  DEFAULT_CALLOUT_STATUS,
  DEFAULT_CALLOUT_VARIANT,
} from './definitions'

export const CALLOUT_META = {
  Callout: {
    overview: {
      bundle: 'core',
      title: 'Semantic message block for emphasizing important information.',
      features: ['used to draw attention to important information, confirmations, warnings or errors within a page'],
      composedOf: ['Box', 'Text', 'Spacer', 'WithIcon'],
      topLevelTags: CALLOUT_TAGS,
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
        options: CALLOUT_SIZES,
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
    examples: [
      {
        jsx: <Callout status="info" content="Callout text content" />,
        skip: true,
      },
      {
        description: 'Highlights neutral or contextual information for the user.',
        jsx: (
          <>
            <Callout content="Callout text content" />
            <Spacer blockSize="md" />
            <Callout content="Callout text content" variant="outline" />
            <Spacer blockSize="md" />
            <Callout content="Callout text content" variant="soft-outline" />
          </>
        ),
      },
      {
        description: 'Indicates a positive outcome or confirmation.',
        jsx: (
          <>
            <Callout content="Callout text content" status="success" />
            <Spacer blockSize="md" />
            <Callout content="Callout text content" variant="outline" status="success" />
            <Spacer blockSize="md" />
            <Callout content="Callout text content" variant="soft-outline" status="success" />
          </>
        ),
      },
      {
        description: 'Draws attention to a caution or potential issue.',
        jsx: (
          <>
            <Callout content="Callout text content" status="warning" />
            <Spacer blockSize="md" />
            <Callout content="Callout text content" variant="outline" status="warning" />
            <Spacer blockSize="md" />
            <Callout content="Callout text content" variant="soft-outline" status="warning" />
          </>
        ),
      },
      {
        description: 'Signals an error or critical problem that requires attention.',
        jsx: (
          <>
            <Callout content="Callout text content" status="error" />
            <Spacer blockSize="md" />
            <Callout content="Callout text content" variant="outline" status="error" />
            <Spacer blockSize="md" />
            <Callout content="Callout text content" variant="soft-outline" status="error" />
          </>
        ),
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<CalloutProps>,
}
