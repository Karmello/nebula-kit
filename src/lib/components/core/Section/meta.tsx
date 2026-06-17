import { SECTION_TAGS, TSHIRT_SIZES } from 'lib/constants'
import { Section, SectionProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { TEXT_META } from '../Text/meta'
import { TITLE_META } from '../Title/meta'
import { DEFAULT_SECTION_INTENT, DEFAULT_SECTION_SIZE, DEFAULT_SECTION_VARIANT, SECTION_VARIANTS } from './definitions'

export const SECTION_META = {
  Section: {
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
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: BOX_META.Box.props.color,
      heading: {
        options: ['string'],
        isRequired: true,
        description: 'Heading text.',
      },
      headingIntent: {
        ...TEXT_META.Text.props.intent,
        description: "Color tone applied to the component's heading text.",
      },
      iconName: TITLE_META.Title.props.iconName,
      iconPlacement: {
        ...TITLE_META.Title.props.iconPlacement,
        description: 'Icon placement relative to heading.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_SECTION_INTENT),
      },
      interactive: BOX_META.Box.props.interactive,
      size: {
        options: TSHIRT_SIZES,
        defaultValue: DEFAULT_SECTION_SIZE,
        description: 'Controls overall proportions - adjusting heading size and spacings.',
      },
      tag: {
        ...BOX_META.Box.props.tag,
        defaultValue: 'section',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      variant: {
        ...BOX_META.Box.props.variant,
        options: SECTION_VARIANTS,
        defaultValue: String(DEFAULT_SECTION_VARIANT),
      },
    },
    examples: [
      {
        description: 'Default section with a heading and body content.',
        jsx: <Section heading="Section heading">Section content area</Section>,
      },
      {
        description: 'Section with custom size and variant.',
        jsx: (
          <Section heading="Section heading" size="lg" variant="outline">
            Section content area
          </Section>
        ),
      },
      {
        description: 'Section with custom intent configuration.',
        jsx: (
          <Section heading="Section heading" size="lg" variant="outline" intent="primary">
            Section content area
          </Section>
        ),
      },
      {
        description: 'Interactive section.',
        jsx: (
          <Section heading="Section heading" size="lg" variant="outline" intent="primary" interactive>
            Section content area
          </Section>
        ),
      },
    ],
    changelog: {
      '0.10.0': ['refined size presets for better layout balance and spacing consistency', 'added `headingIntent` prop'],
      '0.9.0': ['exposed `interactive` prop via Box'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<SectionProps>,
}
