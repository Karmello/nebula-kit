import { Section, Text } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import {
  SECTION_INHERITED_PROPS,
  SectionElem,
  SectionOwnProps,
} from 'lib/components/containers/Section/definitions'

const SECTION_META: ComponentMeta<SectionOwnProps> = {
  overview: {
    description:
      'A semantic content block with a heading, a divider, and consistent padding, used to organize related content within a page.',
    role: [
      'groups related content into a distinct, semantic block',
      'separates content visually with a divider and spacing',
    ],
    behavior: ['requires children', 'requires a heading prop'],
    byDefault: [
      'renders as a <section> element',
      'renders the heading as a Text component with h6 typography',
      'renders a horizontal divider',
    ],
    examplesOfUse: [
      'separating content areas',
      'breaking long content into titled sections for readability',
      'organizing dashboard widgets with headings',
    ],
    composedOf: SECTION_INHERITED_PROPS,
    rendersAs: SectionElem,
  },
  ownProps: [
    {
      name: 'heading',
      options: ['string', 'JSX.Element'],
      isRequired: true,
      isResponsive: false,
      description:
        "Defines the section's heading, provided as a plain string or a JSX element (typically a Text component for consistent typography).",
    },
    {
      name: 'hideDivider',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Controls the visibility of the divider below the heading.',
    },
  ],
  examples: [
    {
      description: 'A basic section with a text heading and body content.',
      jsx: <Section heading="Default heading">Content</Section>,
    },
    {
      description: 'Renders a section with a custom heading component for more control over typography.',
      jsx: <Section heading={<Text typography="h3">Custom heading</Text>}>Content</Section>,
    },
    {
      description: 'Renders a section with an outlined border, primary intent styling, and custom padding.',
      jsx: (
        <Section heading="Bordered section" variant="outline" intent="primary" padding={10}>
          Content
        </Section>
      ),
    },
  ],
}

export default {
  Section: SECTION_META,
}
