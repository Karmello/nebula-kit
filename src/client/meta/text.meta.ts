import {
  TEXT_DEFAULT_INTENT,
  TEXT_DEFAULT_LINE_HEIGHT,
  TEXT_DEFAULT_TEXT_ALIGN,
  TEXT_DEFAULT_TYPOGRAPHY,
  TextOwnProps,
  WITH_ICON_DEFAULT_ICON_POSITION,
} from 'lib/components'

import { BoxIntent, ComponentMeta, CssTextAlign, IconPosition, TextAs, TextTypography } from 'lib/definitions'

import { TYPOGRAPHY_TO_PROPS } from 'lib/components'
import { ICON_NAMES } from 'lib/icons'

enum PropCategory {
  appearance = 'Appearance',
  typography = 'Typography',
  alignment = 'Alignment',
  emphasis = 'Emphasis',
  textBehavior = 'Text behavior',
  adornments = 'Adornments',
  other = 'Other',
}

const TEXT_META: ComponentMeta<TextOwnProps> = {
  name: 'Text',
  description:
    'Text is a typography component that renders semantic text elements with consistent styles. It provides a unified API for alignment, intent, and typography presets, while still allowing fine-grained control over size, line height, and emphasis. Use Text when you need readable, theme-aware text that can adapt responsively, handle truncation or clamping, and optionally include icons alongside content.',
  props: [
    {
      category: PropCategory.appearance,
      name: 'intent',
      options: Object.values(BoxIntent),
      defaultValue: TEXT_DEFAULT_INTENT,
      isRequired: false,
      isResponsive: false,
      description: 'Applies a themed style that conveys meaning or emphasis through color and tone.',
    },
    {
      category: PropCategory.typography,
      name: 'typography',
      options: Object.values(TextTypography),
      defaultValue: TEXT_DEFAULT_TYPOGRAPHY,
      isRequired: false,
      isResponsive: false,
      description:
        'Applies a predefined typography style from the design system, controlling as and fontSize together.',
    },
    {
      category: PropCategory.typography,
      name: 'fontSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: String(TYPOGRAPHY_TO_PROPS[TEXT_DEFAULT_TYPOGRAPHY].fontSize),
      isRequired: false,
      isResponsive: true,
      description: 'Sets the text size, overriding the value provided by typography.',
    },
    {
      category: PropCategory.typography,
      name: 'lineHeight',
      options: ['CSS (string, number)'],
      defaultValue: TEXT_DEFAULT_LINE_HEIGHT,
      isRequired: false,
      isResponsive: true,
      description: 'Sets the vertical spacing between lines of text.',
    },
    {
      category: PropCategory.alignment,
      name: 'textAlign',
      options: Object.values(CssTextAlign),
      defaultValue: TEXT_DEFAULT_TEXT_ALIGN,
      isRequired: false,
      isResponsive: true,
      description: 'Sets the horizontal alignment of the text within its container.',
    },
    {
      category: PropCategory.emphasis,
      name: 'bold',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Toggles bold styling for the text.',
    },
    {
      category: PropCategory.emphasis,
      name: 'italic',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Toggles italic styling for the text.',
    },
    {
      category: PropCategory.textBehavior,
      name: 'noWrap',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Prevents the text from wrapping onto multiple lines.',
    },
    {
      category: PropCategory.textBehavior,
      name: 'truncate',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Shortens overflowing text to a single line with an ellipsis.',
    },
    {
      category: PropCategory.textBehavior,
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
    {
      category: PropCategory.other,
      name: 'as',
      options: Object.values(TextAs),
      defaultValue: TYPOGRAPHY_TO_PROPS[TEXT_DEFAULT_TYPOGRAPHY].as,
      isRequired: false,
      isResponsive: false,
      description:
        'Specifies which HTML element the text should render as, for semantic control without affecting its appearance.',
    },
  ],
}

export default TEXT_META
