import { ComponentMeta } from 'client/definitions'
import { DEFAULT_TEXT_TYPOGRAPHY, TextElem, TextTypography } from 'lib/definitions'
import { Text, TEXT_INHERITED_PROPS, TextOwnProps } from 'lib/components'

import { applyResponsiveProps } from './_helpers'

const TEXT_META: ComponentMeta<TextOwnProps> = {
  overview: {
    title: 'Text',
    description:
      'Text is the foundational component for displaying and styling textual content. It ensures consistent typography across the system.',
    responsibilities: [
      'render semantic text elements with consistent typography',
      'provide common text styling and formatting options',
      'allow integration of inline icons alongside text',
    ],
    characteristics: [
      'requires children',
      `the elem prop is restricted to ${TextElem.map(s => `<${s}>`).join(', ')}`,
    ],
    defaultBehavior: ['renders as a <p> tag', 'uses neutral text intent'],
    useCases: [
      'display body copy, captions, and headings',
      'present truncated or clamped snippets of text',
      'combine text with icons for labels or actions',
    ],
    inheritedProps: TEXT_INHERITED_PROPS,
  },
  props: [
    {
      name: 'typography',
      options: Object.values(TextTypography),
      defaultValue: DEFAULT_TEXT_TYPOGRAPHY,
      isRequired: false,
      isResponsive: false,
      description:
        'Applies a predefined typography style from the design system, controlling elem, fontSize and lineHeight together.',
    },
    {
      name: 'bold',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Toggles bold styling for the text.',
    },
    {
      name: 'italic',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Toggles italic styling for the text.',
    },
    {
      name: 'noWrap',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Prevents the text from wrapping onto multiple lines.',
    },
    {
      name: 'truncate',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Shortens overflowing text to a single line with an ellipsis.',
    },
    {
      name: 'clampLines',
      options: ['number'],
      isRequired: false,
      isResponsive: false,
      description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
    },
  ],
  examples: [
    {
      jsx: <Text>Paragraph</Text>,
      description: 'Uses body typography and renders a <p> tag by default.',
    },
    {
      jsx: <Text bold>Bold paragraph</Text>,
      description: 'Renders bold paragraph.',
    },
    {
      jsx: <Text italic>Italic paragraph</Text>,
      description: 'Renders text in italic style.',
    },
    {
      jsx: <Text intent="primary">Primary text intent</Text>,
      description: 'Applies the primary intent color.',
    },
    {
      jsx: <Text iconName="search">Paragraph with an icon</Text>,
      description: 'Supports inline icons aligned with text.',
    },
    {
      jsx: <Text typography="h5">Heading 5</Text>,
      description: 'The typography prop sets the HTML tag, font size, and line height automatically.',
    },
  ],
}

const META = {
  Text: TEXT_META,
}

applyResponsiveProps(META)

export default META
