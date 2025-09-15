import { Divider, DIVIDER_INHERITED_PROPS, DividerOwnProps, Text } from 'lib/components'
import { ComponentMeta } from 'client/definitions'
import { DEFAULT_DIVIDER_THICKNESS } from 'lib/definitions'

const DIVIDER_META: ComponentMeta<DividerOwnProps> = {
  overview: {
    description: 'Separates content sections with a simple horizontal rule.',
    role: [
      'creates clear visual separation to reduce scanning effort',
      'marks a thematic break between related blocks of content',
    ],
    behavior: ['renders as a <hr> element'],
    byDefault: ['uses the tertiary intent', 'uses the thickness of 1'],
    examplesOfUse: [
      'placed under a heading to emphasize separation from following content',
      'used between sections of a form or card to group related information',
    ],
    composedOf: DIVIDER_INHERITED_PROPS,
  },
  ownProps: [
    {
      name: 'thickness',
      description: 'Controls the stroke weight of the divider.',
      options: ['ScaleValue'],
      defaultValue: String(DEFAULT_DIVIDER_THICKNESS),
      isRequired: false,
      isResponsive: false,
    },
  ],
  examples: [
    {
      description:
        'By default, renders a horizontal line with standard thickness (scale 1) and tertiary intent.',
      jsx: <Divider />,
    },
    {
      description: 'Renders a horizontal line with thickness set to scale 3 and primary intent.',
      jsx: <Divider thickness={3} intent="primary" />,
    },
    {
      description:
        'A divider placed directly under a heading to visually separate the title from the content that follows.',
      jsx: (
        <>
          <Text typography="h6">Heading</Text>
          <Divider />
        </>
      ),
    },
  ],
}

export default {
  Divider: DIVIDER_META,
}
