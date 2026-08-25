import {
  CALLOUT_STATUSES,
  CALLOUT_VARIANTS,
  DEFAULT_CALLOUT_INTENT,
  DEFAULT_CALLOUT_SIZE,
  DEFAULT_CALLOUT_STATUS,
  DEFAULT_CALLOUT_VARIANT,
} from 'lib/components/core/Callout/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { CalloutProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const CALLOUT_PROPS: Record<keyof CalloutProps, Prop> = {
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
    ...BOX_META.props.intent,
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
  tag: BOX_META.props.tag,
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  variant: {
    ...BOX_META.props.variant,
    options: Object.values(CALLOUT_VARIANTS),
    defaultValue: String(DEFAULT_CALLOUT_VARIANT),
  },
}
