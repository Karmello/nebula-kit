import { DEFAULT_BOX_INTENT, DEFAULT_TEXT_TYPOGRAPHY, WITH_ICON_DEFAULT_ICON_POSITION } from 'lib/definitions'
import { BoxIntent, ComponentMeta, IconPosition, TextElem, TextTypography } from 'lib/definitions'
import { Text, TextProps, TYPOGRAPHY_TO_PROPS } from 'lib/components'
import { ICON_NAMES } from 'lib/icons'
import { PropCategory } from 'client/definitions'

import { applyResponsiveProps } from './_helpers'

const TEXT_META: ComponentMeta<TextProps<TextElem>> = {
  overview: {
    name: 'Text',
    description:
      'Text is the foundational component for displaying and styling textual content. It ensures consistent typography across the system.',
    responsibilities: [
      'render semantic text elements with consistent typography',
      'provide common text styling and formatting options',
      'allow integration of inline icons alongside text',
    ],
    useCases: [
      'display body copy, captions, and headings',
      'present truncated or clamped snippets of text',
      'combine text with icons for labels or actions',
    ],
    defaultBehavior: [
      'requires children',
      'renders as a <p> tag',
      'uses neutral text intent',
      'inherits additional props from Box',
    ],
    propsDescription: '',
  },
  props: [
    {
      category: PropCategory.element,
      name: 'children',
      options: ['ReactNode'],
      defaultValue: '',
      isRequired: true,
      isResponsive: false,
      description: 'Content rendered inside the tag is required for Text.',
    },
    {
      category: PropCategory.element,
      name: 'elem',
      options: Object.values(TextElem),
      defaultValue: TextElem[0],
      isRequired: false,
      isResponsive: false,
      description: 'Specifies which HTML element the text should render as.',
    },
    {
      category: PropCategory.typography,
      name: 'typography',
      options: Object.values(TextTypography),
      defaultValue: DEFAULT_TEXT_TYPOGRAPHY,
      isRequired: false,
      isResponsive: false,
      description:
        'Applies a predefined typography style from the design system, controlling elem and fontSize together.',
    },
    {
      category: PropCategory.typography,
      name: 'fontSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: String(TYPOGRAPHY_TO_PROPS[DEFAULT_TEXT_TYPOGRAPHY].fontSize),
      isRequired: false,
      isResponsive: true,
      description: 'Sets the text size, overriding the value provided by typography.',
    },
    {
      category: PropCategory.typography,
      name: 'lineHeight',
      options: ['CSS (string, number)'],
      defaultValue: String(TYPOGRAPHY_TO_PROPS[DEFAULT_TEXT_TYPOGRAPHY].lineHeight),
      isRequired: false,
      isResponsive: true,
      description: 'Sets the vertical spacing between lines of text.',
    },
    {
      category: PropCategory.typography,
      name: 'bold',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Toggles bold styling for the text.',
    },
    {
      category: PropCategory.typography,
      name: 'italic',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Toggles italic styling for the text.',
    },
    {
      category: PropCategory.appearance,
      name: 'intent',
      options: Object.values(BoxIntent),
      defaultValue: DEFAULT_BOX_INTENT,
      isRequired: false,
      isResponsive: false,
      description: 'Applies a themed style that conveys meaning or emphasis through color and tone.',
    },
    {
      category: PropCategory.behavior,
      name: 'noWrap',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Prevents the text from wrapping onto multiple lines.',
    },
    {
      category: PropCategory.behavior,
      name: 'truncate',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Shortens overflowing text to a single line with an ellipsis.',
    },
    {
      category: PropCategory.behavior,
      name: 'clampLines',
      options: ['number'],
      defaultValue: '',
      isRequired: false,
      isResponsive: false,
      description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
    },
    {
      category: PropCategory.adornments,
      name: 'iconName',
      options: Object.values(ICON_NAMES),
      defaultValue: '',
      isRequired: false,
      isResponsive: false,
      description: 'Adds an icon alongside the text.',
    },
    {
      category: PropCategory.adornments,
      name: 'iconPosition',
      options: Object.values(IconPosition),
      defaultValue: WITH_ICON_DEFAULT_ICON_POSITION,
      isRequired: false,
      isResponsive: false,
      description: 'Sets where the icon appears in relation to the text.',
    },
  ],
  examples: [
    {
      jsx: <Text>Paragraph</Text>,
      description: 'Uses body typography and renders a <p> tag by default.',
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
      jsx: <Text typography="h6">Heading 6</Text>,
      description: 'The typography prop sets the HTML tag, font size, and line height automatically.',
    },
  ],
}

applyResponsiveProps(TEXT_META)

export default TEXT_META
