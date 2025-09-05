import { DEFAULT_BOX_INTENT, DEFAULT_TEXT_TYPOGRAPHY, WITH_ICON_DEFAULT_ICON_POSITION } from 'lib/definitions'

import { BoxIntent, ComponentMeta, IconPosition, TextElem, TextTypography } from 'lib/definitions'
import { TextProps, TYPOGRAPHY_TO_PROPS } from 'lib/components'
import { ICON_NAMES } from 'lib/icons'
import { PropCategory } from 'client/definitions'

const TEXT_META: ComponentMeta<TextProps<TextElem>> = {
  overview: {
    name: 'Text',
    description:
      'Text is a typography component that renders semantic text elements with consistent styles. It provides a unified API for alignment, intent, and typography presets, while still allowing fine-grained control over size, line height, and emphasis. Use Text when you need readable, theme-aware text that can adapt responsively, handle truncation or clamping, and optionally include icons alongside content.',
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
      category: PropCategory.appearance,
      name: 'intent',
      options: Object.values(BoxIntent),
      defaultValue: DEFAULT_BOX_INTENT,
      isRequired: false,
      isResponsive: false,
      description: 'Applies a themed style that conveys meaning or emphasis through color and tone.',
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
}

export default TEXT_META
