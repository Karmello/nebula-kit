import { ComponentMeta } from 'client/definitions'

import {
  CALLOUT_CONFIG,
  DEFAULT_CALLOUT_INTENT,
  DEFAULT_CALLOUT_VARIANT,
  CalloutIntent,
  CalloutProps,
  CalloutVariant,
} from 'lib/components/feedback/Callout/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const CALLOUT_PROPS_META: ComponentMeta<CalloutProps>['props'] = {
  tag: HTML_TAG_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  borderRadius: BOX_PROPS_META.borderRadius,
  padding: BOX_PROPS_META.padding,
  paddingInline: BOX_PROPS_META.paddingInline,
  paddingBlock: BOX_PROPS_META.paddingBlock,
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
}

export { CALLOUT_PROPS_META }
