import {
  DEFAULT_SECTION_INTENT,
  DEFAULT_SECTION_SIZE,
  DEFAULT_SECTION_VARIANT,
  SECTION_TAGS,
  SECTION_VARIANTS,
} from 'lib/components/core/Section/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { SectionProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TEXT_META } from '../Text'
import { TITLE_META } from '../Title'
import { SECTION_CHANGELOG } from './changelog'
import { SECTION_EXAMPLES } from './examples'

export const SECTION_META = {
  overview: {
    bundle: 'core',
    title: 'Semantic container for grouping content under a titled section.',
    features: [
      'groups related content under a semantic section with a heading',
      'provides consistent spacing and visual separation between heading and body',
      'supports optional icon and styling variants for section headers',
    ],
    composedOf: ['Box', 'Text', 'Divider', 'Spacer', 'Title'],
    exposedTags: SECTION_TAGS,
  },
  props: {
    children: {
      ...BOX_META.props.children,
      isRequired: true,
    },
    color: BOX_META.props.color,
    heading: {
      options: ['string'],
      isRequired: true,
      description: 'Heading text.',
    },
    headingIntent: {
      ...TEXT_META.props.intent,
      description: "Color tone applied to the component's heading text.",
    },
    iconName: TITLE_META.props.iconName,
    iconPlacement: {
      ...TITLE_META.props.iconPlacement,
      description: 'Icon placement relative to heading.',
    },
    intent: {
      ...BOX_META.props.intent,
      defaultValue: String(DEFAULT_SECTION_INTENT),
    },
    interactive: BOX_META.props.interactive,
    size: {
      options: TSHIRT_SIZES,
      defaultValue: DEFAULT_SECTION_SIZE,
      description: 'Controls overall proportions - adjusting heading size and spacings.',
    },
    tag: {
      ...BOX_META.props.tag,
      defaultValue: 'section',
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
    variant: {
      ...BOX_META.props.variant,
      options: SECTION_VARIANTS,
      defaultValue: String(DEFAULT_SECTION_VARIANT),
    },
  },
  examples: SECTION_EXAMPLES,
  changelog: SECTION_CHANGELOG,
} satisfies ComponentMeta<SectionProps>
