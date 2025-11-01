import { ComponentMeta } from 'client/definitions'
import { CSS_DISPLAY, CSS_OVERFLOW, CSS_POSITION, CSS_TEXT_ALIGN } from 'lib/definitions'
import { BoxProps, BOX_VARIANTS, DEFAULT_BOX_VARIANT, BOX_INTENTS } from 'lib/components/base/Box/definitions'

import {
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BORDER_WIDTH_SIZE,
} from 'lib/components/utility/NebkitProvider/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const BOX_PROPS_META: ComponentMeta<BoxProps>['props'] = {
  variant: {
    options: Object.values(BOX_VARIANTS),
    defaultValue: DEFAULT_BOX_VARIANT,
    isResponsive: true,
    description: 'Visual style variant from the system design.',
  },
  intent: {
    options: Object.values(BOX_INTENTS),
    isResponsive: true,
    description: 'Semantic color intent applied.',
  },
  borderIntent: {
    options: Object.values(BOX_INTENTS),
    isResponsive: true,
    description: 'Semantic color intent applied to the border.',
  },
  opacity: {
    options: ['0 - 1'],
    defaultValue: '1',
    isResponsive: true,
    description: 'Transparency level, from fully visible to fully transparent.',
  },
  borderWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_WIDTH_SIZE),
    description: 'Sets border width overriding global value set by NebkitProvider.',
  },
  borderTopWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_WIDTH_SIZE),
    description: 'Border width for the top side.',
  },
  borderRightWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_WIDTH_SIZE),
    description: 'Border width for the right side.',
  },
  borderBottomWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_WIDTH_SIZE),
    description: 'Border width for the bottom side.',
  },
  borderLeftWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_WIDTH_SIZE),
    description: 'Border width for the left side.',
  },
  borderRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    isResponsive: true,
    description: 'Sets border radius overriding global value set by NebkitProvider.',
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
  borderBottomRightRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    isResponsive: true,
    description: 'Border radius for the bottom right corner.',
  },
  borderBottomLeftRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    isResponsive: true,
    description: 'Border radius for the bottom left corner.',
  },
  interactive: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Enables hover, active and focus states.',
  },
  hoveredByDefault: {
    options: ['boolean'],
    defaultValue: 'false',
    description:
      'Shows the element in its hovered visual state by default, without requiring user interaction. Works only with interactive on.',
  },
  disableActiveState: {
    options: ['boolean'],
    defaultValue: 'false',
    description:
      'Disables the active visual state, keeping the element unchanged when clicked or held. Works only with interactive on.',
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
  position: {
    options: Object.values(CSS_POSITION),
    defaultValue: CSS_POSITION[0],
    isResponsive: true,
    description: 'Position in the layout flow.',
  },
  top: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Top offset.',
  },
  right: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Right offset.',
  },
  bottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Bottom offset.',
  },
  left: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Left offset.',
  },
  textAlign: {
    options: Object.values(CSS_TEXT_ALIGN),
    defaultValue: CSS_TEXT_ALIGN[0],
    isResponsive: true,
    description: 'Text alignment within the component.',
  },
  blockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Height.',
  },
  minBlockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Minimum height.',
  },
  maxBlockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'none',
    isResponsive: true,
    description: 'Maximum height.',
  },
  inlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Width.',
  },
  minInlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isResponsive: true,
    description: 'Minimum width.',
  },
  maxInlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'none',
    isResponsive: true,
    description: 'Maximum width.',
  },
  padding: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for all sides.',
  },
  paddingInline: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the left and right sides.',
  },
  paddingBlock: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the top and bottom sides.',
  },
  paddingTop: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the top side.',
  },
  paddingRight: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the right side.',
  },
  paddingBottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the bottom side.',
  },
  paddingLeft: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Padding for the left side.',
  },
  margin: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for all sides.',
  },
  marginInline: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the left and right sides.',
  },
  marginBlock: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the top and bottom sides.',
  },
  marginTop: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the top side.',
  },
  marginRight: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the right side.',
  },
  marginBottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the bottom side.',
  },
  marginLeft: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isResponsive: true,
    description: 'Margin for the left side.',
  },
  ...HTML_TAG_PROPS_META,
  zIndex: {
    options: ['number'],
    description: 'Controls the stacking order.',
  },
}

export { BOX_PROPS_META }
