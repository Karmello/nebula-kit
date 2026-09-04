import { BOX_INTENTS } from 'lib/components/core/Box/constants'
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
import type { DocProp } from 'client/definitions'

export const CALLOUT_PROPS: Record<keyof CalloutProps, DocProp> = {
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
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_CALLOUT_INTENT),
    description: "Color tone applied to the component's main color.",
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
  tag: {
    options: ['HTML tag'],
    defaultValue: 'div',
    description: 'The HTML tag to be rendered as the container.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  variant: {
    options: Object.values(CALLOUT_VARIANTS),
    defaultValue: String(DEFAULT_CALLOUT_VARIANT),
    description: 'Visual style variant.',
  },
}
