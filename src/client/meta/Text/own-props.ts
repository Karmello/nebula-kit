import { ComponentMeta } from 'client/definitions'
import { DEFAULT_TEXT_TYPOGRAPHY, TextOwnProps, TextTypography } from 'lib/components/base/Text/definitions'

export default {
  typography: {
    name: 'typography',
    options: Object.values(TextTypography),
    defaultValue: DEFAULT_TEXT_TYPOGRAPHY,
    isRequired: false,
    isResponsive: false,
    description:
      'Applies a predefined typography style from the design system, controlling tag, fontSize and lineHeight together.',
  },
  bold: {
    name: 'bold',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Toggles bold styling for the text.',
  },
  italic: {
    name: 'italic',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Toggles italic styling for the text.',
  },
  noWrap: {
    name: 'noWrap',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Prevents the text from wrapping onto multiple lines.',
  },
  truncate: {
    name: 'truncate',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Shortens overflowing text to a single line with an ellipsis.',
  },
  clampLines: {
    name: 'clampLines',
    options: ['number'],
    isRequired: false,
    isResponsive: false,
    description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
  },
} as ComponentMeta<TextOwnProps>['ownProps']
