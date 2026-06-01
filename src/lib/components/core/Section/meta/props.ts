import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SECTION_SIZE,
  DEFAULT_SECTION_INTENT,
  DEFAULT_SECTION_VARIANT,
  SECTION_SIZES,
  SECTION_VARIANTS,
  type SectionProps,
} from '../definitions'

import { BOX_PROPS_META } from '../../Box/meta/props'
import { TEXT_PROPS_META } from '../../Text/meta/props'
import { WITH_ICON_PROPS_META } from '../../WithIcon/meta/props'

const SECTION_PROPS_META: ComponentMeta<SectionProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  heading: {
    options: ['string'],
    isRequired: true,
    description: 'Heading text.',
  },
  headingIntent: {
    ...TEXT_PROPS_META.intent,
    description: "Color tone applied to the component's heading text.",
  },
  iconName: WITH_ICON_PROPS_META.iconName,
  iconPlacement: {
    ...WITH_ICON_PROPS_META.iconPlacement,
    description: 'Icon placement relative to heading.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_SECTION_INTENT),
  },
  interactive: BOX_PROPS_META.interactive,
  size: {
    options: SECTION_SIZES as unknown as string[],
    defaultValue: DEFAULT_SECTION_SIZE,
    description: 'Controls overall proportions - adjusting heading size and spacings.',
  },
  tag: {
    ...BOX_PROPS_META.tag,
    defaultValue: 'section',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    options: SECTION_VARIANTS,
    defaultValue: String(DEFAULT_SECTION_VARIANT),
  },
}

export { SECTION_PROPS_META }
