import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_CALLOUT_STATUS,
  DEFAULT_CALLOUT_VARIANT,
  DEFAULT_CALLOUT_SIZE,
  CALLOUT_STATUSES,
  CALLOUT_VARIANTS,
  CALLOUT_SIZES,
  DEFAULT_CALLOUT_INTENT,
  type CalloutProps,
} from '../definitions'

import { BOX_PROPS_META } from '../../Box/meta/props'

const CALLOUT_PROPS_META: ComponentMeta<CalloutProps>['props'] = {
  content: {
    options: ['string'],
    isRequired: true,
    description: 'A text string displayed as the main body of the Callout.',
  },
  heading: {
    description: 'Text displayed as the title of the Callout. Overrides the default heading associated with the selected status.',
    options: ['string'],
  },
  intent: {
    ...BOX_PROPS_META.intent,
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
  tag: BOX_PROPS_META.tag,
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    options: Object.values(CALLOUT_VARIANTS),
    defaultValue: String(DEFAULT_CALLOUT_VARIANT),
  },
}

export { CALLOUT_PROPS_META }
