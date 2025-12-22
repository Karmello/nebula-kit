import { ComponentMeta } from 'client/definitions'
import { COLORS, THEMES } from 'lib/definitions'
import { BoxProps, BOX_VARIANTS, BOX_INTENTS } from 'lib/components/core/base/Box'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const BOX_PROPS_META: ComponentMeta<BoxProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  brand: {
    options: COLORS as never,
    isResponsive: true,
    description: 'Default surface color context for the component and its descendants.',
  },
  blockSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Height.',
  },
  borderBottomLeftRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border radius for the bottom left corner.',
  },
  borderBottomRightRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border radius for the bottom right corner.',
  },
  borderBottomWidth: {
    options: ['CSS'],
    description: 'Border width for the bottom side.',
  },
  borderLeftWidth: {
    options: ['CSS'],
    description: 'Border width for the left side.',
  },
  borderRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Sets border radius overriding global value set by NebkitProvider.',
  },
  borderRightWidth: {
    options: ['CSS'],
    description: 'Border width for the right side.',
  },
  borderTopLeftRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border radius for the top left corner.',
  },
  borderTopRightRadius: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Border radius for the top right corner.',
  },
  borderTopWidth: {
    options: ['CSS'],
    description: 'Border width for the top side.',
  },
  borderWidth: {
    options: ['CSS'],
    description: 'Sets border width overriding global value set by NebkitProvider.',
  },
  bottom: {
    options: ['CSS'],
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
    description: 'Disables the component and its interactions.',
  },
  display: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Display type controlling how the component is laid out.',
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
    description: 'Width.',
  },
  intent: {
    options: Object.values(BOX_INTENTS),
    isResponsive: true,
    description: "Tone level applied to the component's main color.",
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
  },
  margin: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for all sides.',
  },
  marginBlock: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the top and bottom sides.',
  },
  marginBottom: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the bottom side.',
  },
  marginInline: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the left and right sides.',
  },
  marginLeft: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the left side.',
  },
  marginRight: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the right side.',
  },
  marginTop: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Margin for the top side.',
  },
  maxBlockSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Maximum height.',
  },
  maxInlineSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Maximum width.',
  },
  minBlockSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Minimum height.',
  },
  minInlineSize: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Minimum width.',
  },
  opacity: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Transparency level, from fully visible to fully transparent.',
  },
  overflow: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Overflow behavior for both axes.',
  },
  overflowX: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Overflow behavior on the horizontal axis.',
  },
  overflowY: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Overflow behavior on the vertical axis.',
  },
  padding: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for all sides.',
  },
  paddingBlock: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides.',
  },
  paddingBottom: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the bottom side.',
  },
  paddingInline: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the left and right sides.',
  },
  paddingLeft: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the left side.',
  },
  paddingRight: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the right side.',
  },
  paddingTop: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Padding for the top side.',
  },
  position: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Position in the layout flow.',
  },
  right: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Right offset.',
  },
  textAlign: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Text alignment within the component.',
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
