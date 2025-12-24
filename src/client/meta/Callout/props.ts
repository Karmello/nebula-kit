import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_CALLOUT_STATUS,
  DEFAULT_CALLOUT_VARIANT,
  DEFAULT_CALLOUT_SIZE,
  CALLOUT_CONFIG,
  CALLOUT_STATUSES,
  CALLOUT_VARIANTS,
  CALLOUT_SIZES,
  CalloutProps,
  DEFAULT_CALLOUT_INTENT,
} from 'lib/components/core/feedback/Callout'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const CALLOUT_PROPS_META: ComponentMeta<CalloutProps>['props'] = {
  content: {
    options: ['string'],
    isRequired: true,
    description: 'A text string displayed as the main body of the Callout.',
  },
  heading: {
    description:
      'Text displayed as the title of the Callout. Overrides the default heading associated with the selected status.',
    options: ['string'],
    defaultValue: CALLOUT_CONFIG[DEFAULT_CALLOUT_STATUS].heading,
    isResponsive: false,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_CALLOUT_INTENT),
  },
  size: {
    options: CALLOUT_SIZES as unknown as string[],
    defaultValue: DEFAULT_CALLOUT_SIZE,
    description: 'Controls overall proportions - adjusting heading size and spacings.',
  },
  status: {
    options: Object.values(CALLOUT_STATUSES),
    defaultValue: DEFAULT_CALLOUT_STATUS,
    description: 'Defines the type of message being communicated.',
  },
  tag: HTML_TAG_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    options: Object.values(CALLOUT_VARIANTS),
    defaultValue: DEFAULT_CALLOUT_VARIANT,
  },
}

export { CALLOUT_PROPS_META }
