import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SECTION_SIZE,
  DEFAULT_SECTION_INTENT,
  DEFAULT_SECTION_VARIANT,
  SectionSize,
  SectionProps,
  SectionVariant,
} from 'lib/components/containers/Section/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const SECTION_PROPS_META: ComponentMeta<SectionProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    defaultValue: '<section>',
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  variant: {
    ...BOX_PROPS_META.variant,
    options: SectionVariant as unknown as string[],
    defaultValue: DEFAULT_SECTION_VARIANT,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: DEFAULT_SECTION_INTENT,
  },
  heading: {
    options: ['string'],
    isRequired: true,
    description: 'Heading text.',
  },
  size: {
    options: SectionSize as unknown as string[],
    defaultValue: DEFAULT_SECTION_SIZE,
    description: 'Controls overall proportions - adjusting heading size and spacings.',
  },
}

export { SECTION_PROPS_META }
