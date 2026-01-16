import { ComponentMeta } from 'client/definitions'

import {
  COLORS,
  CSS_DISPLAY,
  CSS_OVERFLOW,
  CSS_POINTER_EVENTS,
  CSS_POSITION,
  CSS_TEXT_ALIGN,
  THEMES,
} from 'lib/definitions'

import { BoxProps, BOX_VARIANTS, BOX_INTENTS } from 'lib/components/core/base/Box'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const BOX_PROPS_META: ComponentMeta<BoxProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  brand: {
    options: ['BoxColor'],
    isResponsive: true,
    description: 'Default surface color context for the component and its descendants.',
    tooltip: COLORS.join(', '),
  },
  blockSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Logical height.',
    link: true,
  },
  borderBottomLeftRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border radius for the bottom left corner.',
    link: true,
  },
  borderBottomRightRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border radius for the bottom right corner.',
    link: true,
  },
  borderBottomWidth: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border width for the bottom side.',
    link: true,
  },
  borderLeftWidth: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border width for the left side.',
    link: true,
  },
  borderRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Sets border radius overriding global value set by NebkitProvider.',
    link: true,
  },
  borderRightWidth: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border width for the right side.',
    link: true,
  },
  borderTopLeftRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border radius for the top left corner.',
    link: true,
  },
  borderTopRightRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border radius for the top right corner.',
    link: true,
  },
  borderTopWidth: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border width for the top side.',
    link: true,
  },
  borderWidth: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Sets border width overriding global value set by NebkitProvider.',
    link: true,
  },
  bottom: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Bottom offset.',
    link: true,
  },
  color: {
    options: ['BoxColor'],
    isResponsive: true,
    description: 'Color applied to the component.',
    tooltip: COLORS.join(', '),
  },
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
  },
  display: {
    options: CSS_DISPLAY as never,
    isResponsive: true,
    description: 'Display type controlling how the component is laid out.',
    link: true,
  },
  drawable: {
    options: ['boolean'],
    description:
      'Enables visual rendering for the Box surface. When enabled, the Box participates in theming, colors, variants and intents. When disabled, it behaves as a neutral structural container with no visual styling applied.',
  },
  highlighted: {
    options: ['boolean'],
    description:
      'Shows the element in its hovered visual state by default, without requiring pointer interaction. Applies only when interactive is enabled and has no effect when disabled.',
  },
  inlineSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
  inset: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Shorthand for setting top, right, bottom and left offsets. Directional props override it.',
    link: true,
  },
  intent: {
    options: ['BoxIntent'],
    isResponsive: true,
    description: "Tone level applied to the component's main color.",
    tooltip: BOX_INTENTS.join(', '),
  },
  interactive: {
    options: ['boolean'],
    description:
      'Enables visual interaction affordances such as hover styling and focus ring. Does not affect tabIndex, focusability or activation behavior.',
  },
  left: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Left offset.',
    link: true,
  },
  margin: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for all sides.',
    link: true,
  },
  marginBlock: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the top and bottom sides.',
    link: true,
  },
  marginBottom: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the bottom side.',
    link: true,
  },
  marginInline: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the left and right sides.',
    link: true,
  },
  marginLeft: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the left side.',
    link: true,
  },
  marginRight: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the right side.',
    link: true,
  },
  marginTop: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the top side.',
    link: true,
  },
  maxBlockSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Maximum logical height.',
    link: true,
  },
  maxInlineSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
  },
  minBlockSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Minimum logical height.',
    link: true,
  },
  minInlineSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
  },
  opacity: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Transparency level, from fully visible to fully transparent.',
    link: true,
  },
  overflow: {
    options: CSS_OVERFLOW as never,
    isResponsive: true,
    description: 'Overflow behavior for both axes.',
    link: true,
  },
  overflowX: {
    options: CSS_OVERFLOW as never,
    isResponsive: true,
    description: 'Overflow behavior on the horizontal axis.',
    link: true,
  },
  overflowY: {
    options: CSS_OVERFLOW as never,
    isResponsive: true,
    description: 'Overflow behavior on the vertical axis.',
    link: true,
  },
  padding: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for all sides.',
    link: true,
  },
  paddingBlock: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides.',
    link: true,
  },
  paddingBottom: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the bottom side.',
    link: true,
  },
  paddingInline: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the left and right sides.',
    link: true,
  },
  paddingLeft: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the left side.',
    link: true,
  },
  paddingRight: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the right side.',
    link: true,
  },
  paddingTop: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the top side.',
    link: true,
  },
  pointerEvents: {
    options: CSS_POINTER_EVENTS as never,
    description: 'Controls whether the element can receive pointer interactions.',
    link: true,
  },
  position: {
    options: CSS_POSITION as never,
    isResponsive: true,
    description: 'Position in the layout flow.',
    link: true,
  },
  right: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Right offset.',
    link: true,
  },
  textAlign: {
    options: CSS_TEXT_ALIGN as never,
    isResponsive: true,
    description: 'Text alignment within the component.',
    link: true,
  },
  theme: {
    options: THEMES as never,
    isResponsive: true,
    description:
      'Sets a local theme boundary for the component and its drawable descendants. Overrides the global application theme for this subtree without affecting the rest of the app.',
  },
  top: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Top offset.',
    link: true,
  },
  variant: {
    options: Object.values(BOX_VARIANTS),
    isResponsive: true,
    description: 'Visual style variant.',
  },
  zIndex: {
    options: ['number'],
    isResponsive: true,
    description: 'Controls the stacking order.',
    link: true,
  },
}

export { BOX_PROPS_META }
