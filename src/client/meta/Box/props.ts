import { ComponentMeta } from 'client/definitions'
import { COLORS, CSS_DISPLAY, CSS_OVERFLOW, CSS_POSITION, CSS_TEXT_ALIGN } from 'lib/definitions'
import { BoxProps, BOX_VARIANTS, BOX_INTENTS } from 'lib/components/base/Box/definitions'

import { DEFAULT_NEBKIT_BORDER_RADIUS_SIZE } from 'lib/components/utility/NebkitProvider/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const BOX_PROPS_META: ComponentMeta<BoxProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  blockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Height.',
  },
  borderBottomLeftRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    isResponsive: true,
    description: 'Border radius for the bottom left corner.',
  },
  borderBottomRightRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    isResponsive: true,
    description: 'Border radius for the bottom right corner.',
  },
  borderBottomWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    description: 'Border width for the bottom side.',
  },
  borderIntent: {
    options: Object.values(BOX_INTENTS),
    isResponsive: true,
    description: "Tone level applied to the border's color.",
  },
  borderLeftWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    description: 'Border width for the left side.',
  },
  borderRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    isResponsive: true,
    description: 'Sets border radius overriding global value set by NebkitProvider.',
  },
  borderRightWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    description: 'Border width for the right side.',
  },
  borderTopLeftRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    isResponsive: true,
    description: 'Border radius for the top left corner.',
  },
  borderTopRightRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    isResponsive: true,
    description: 'Border radius for the top right corner.',
  },
  borderTopWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    description: 'Border width for the top side.',
  },
  borderWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    description: 'Sets border width overriding global value set by NebkitProvider.',
  },
  bottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Bottom offset.',
  },
  color: {
    options: COLORS as never,
    isResponsive: true,
    description: 'Color applied to the component.',
  },
  disabled: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Disables the component and its interactions.',
  },
  display: {
    options: Object.values(CSS_DISPLAY),
    defaultValue: CSS_DISPLAY[0],
    isResponsive: true,
    description: 'Display type controlling how the component is laid out.',
  },
  hoveredByDefault: {
    options: ['boolean'],
    defaultValue: 'false',
    description:
      'Shows the element in its hovered visual state by default, without requiring user interaction. Works only with interactive on.',
  },
  inlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Width.',
  },
  intent: {
    options: Object.values(BOX_INTENTS),
    isResponsive: true,
    description: "Tone level applied to the component's main color.",
  },
  interactive: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Enables hover styling.',
  },
  left: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Left offset.',
  },
  margin: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for all sides.',
  },
  marginBlock: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the top and bottom sides.',
  },
  marginBottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the bottom side.',
  },
  marginInline: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the left and right sides.',
  },
  marginLeft: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the left side.',
  },
  marginRight: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the right side.',
  },
  marginTop: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the top side.',
  },
  maxBlockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'none',
    isResponsive: true,
    description: 'Maximum height.',
  },
  maxInlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'none',
    isResponsive: true,
    description: 'Maximum width.',
  },
  minBlockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Minimum height.',
  },
  minInlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Minimum width.',
  },
  opacity: {
    options: ['0 - 1'],
    defaultValue: '1',
    isResponsive: true,
    description: 'Transparency level, from fully visible to fully transparent.',
  },
  overflowX: {
    options: Object.values(CSS_OVERFLOW),
    defaultValue: CSS_OVERFLOW[0],
    isResponsive: true,
    description: 'Overflow behavior on the horizontal axis.',
  },
  overflowY: {
    options: Object.values(CSS_OVERFLOW),
    defaultValue: CSS_OVERFLOW[0],
    isResponsive: true,
    description: 'Overflow behavior on the vertical axis.',
  },
  padding: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for all sides.',
  },
  paddingBlock: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the top and bottom sides.',
  },
  paddingBottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the bottom side.',
  },
  paddingInline: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the left and right sides.',
  },
  paddingLeft: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the left side.',
  },
  paddingRight: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the right side.',
  },
  paddingTop: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the top side.',
  },
  position: {
    options: Object.values(CSS_POSITION),
    defaultValue: CSS_POSITION[0],
    isResponsive: true,
    description: 'Position in the layout flow.',
  },
  right: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Right offset.',
  },
  textAlign: {
    options: Object.values(CSS_TEXT_ALIGN),
    defaultValue: CSS_TEXT_ALIGN[0],
    isResponsive: true,
    description: 'Text alignment within the component.',
  },
  top: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Top offset.',
  },
  variant: {
    options: Object.values(BOX_VARIANTS),
    isResponsive: true,
    description: 'Visual style variant.',
  },
  zIndex: {
    options: ['number'],
    description: 'Controls the stacking order.',
  },
}

export { BOX_PROPS_META }
