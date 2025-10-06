import { ComponentMeta } from 'client/definitions'

import {
  CALLOUT_CONFIG,
  DEFAULT_CALLOUT_INTENT,
  DEFAULT_CALLOUT_VARIANT,
  CalloutIntent,
  CalloutProps,
  CalloutVariant,
  CalloutSize,
  DEFAULT_CALLOUT_SIZE,
} from 'lib/components/feedback/Callout/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const CALLOUT_PROPS_META: ComponentMeta<CalloutProps>['props'] = {
  tag: HTML_TAG_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    options: Object.values(CalloutVariant),
    defaultValue: DEFAULT_CALLOUT_VARIANT,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    options: Object.values(CalloutIntent),
    defaultValue: DEFAULT_CALLOUT_INTENT,
  },
  content: {
    description: 'A text string displayed as the main body of the callout.',
    options: ['string'],
    isRequired: true,
    isResponsive: false,
  },
  heading: {
    description:
      'Text displayed as the title of the callout. Overrides the default heading provided for each intent.',
    options: ['string'],
    defaultValue: CALLOUT_CONFIG[DEFAULT_CALLOUT_INTENT].heading,
    isRequired: false,
    isResponsive: false,
  },
  size: {
    options: CalloutSize as unknown as string[],
    defaultValue: DEFAULT_CALLOUT_SIZE,
    description: 'Controls overall proportions - adjusting heading size and spacings.',
  },
}

export { CALLOUT_PROPS_META }
