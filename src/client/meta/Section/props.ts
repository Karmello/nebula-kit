import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SECTION_SIZE,
  DEFAULT_SECTION_INTENT,
  DEFAULT_SECTION_VARIANT,
  SECTION_SIZES,
  SECTION_VARIANTS,
  SectionProps,
} from 'lib/components/core/containers/Section'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { TEXT_PROPS_META } from '../Text/props'

const SECTION_PROPS_META: ComponentMeta<SectionProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  heading: {
    options: ['string'],
    isRequired: true,
    description: 'Heading text.',
  },
  iconName: TEXT_PROPS_META.iconName,
  iconPlacement: {
    ...TEXT_PROPS_META.iconPlacement,
    description: 'Icon placement relative to heading.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: DEFAULT_SECTION_INTENT,
  },

  size: {
    options: SECTION_SIZES as unknown as string[],
    defaultValue: DEFAULT_SECTION_SIZE,
    description: 'Controls overall proportions - adjusting heading size and spacings.',
  },
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    defaultValue: 'section',
  },
  variant: {
    ...BOX_PROPS_META.variant,
    options: SECTION_VARIANTS as unknown as string[],
    defaultValue: DEFAULT_SECTION_VARIANT,
  },
}

export { SECTION_PROPS_META }
