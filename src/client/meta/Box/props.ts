import { ComponentMeta } from 'client/definitions'
import { CssDisplay, CssOverflow, CssPosition, CssTextAlign } from 'lib/definitions'
import { BoxIntent, BoxProps, BoxVariant, DEFAULT_BOX_VARIANT } from 'lib/components/base/Box/definitions'

import {
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
  DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH,
} from 'lib/components/utility/NebkitProvider/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const BOX_PROPS_META: ComponentMeta<BoxProps>['props'] = {
  variant: {
    options: Object.values(BoxVariant),
    defaultValue: DEFAULT_BOX_VARIANT,
    isResponsive: true,
    description: 'Visual style variant from the system design.',
  },
  intent: {
    options: Object.values(BoxIntent),
    isResponsive: true,
    description: 'Semantic color intent applied.',
  },
  borderIntent: {
    options: Object.values(BoxIntent),
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
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH),
    description: 'Sets border width overriding global value set by NebkitProvider.',
  },
  borderTopWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH),
    description: 'Border width for the top side.',
  },
  borderRightWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH),
    description: 'Border width for the right side.',
  },
  borderBottomWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH),
    description: 'Border width for the bottom side.',
  },
  borderLeftWidth: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH),
    description: 'Border width for the left side.',
  },
  borderRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS),
    isResponsive: true,
    description: 'Sets border radius overriding global value set by NebkitProvider.',
  },
  interactive: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Enables hover, focus and press states.',
  },
  disabled: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Disables the component and its interactions.',
  },
  display: {
    options: Object.values(CssDisplay),
    defaultValue: CssDisplay[0],
    isResponsive: true,
    description: 'Display type controlling how the component is laid out.',
  },
  overflowX: {
    options: Object.values(CssOverflow),
    defaultValue: CssOverflow[0],
    isResponsive: true,
    description: 'Overflow behavior on the horizontal axis.',
  },
  overflowY: {
    options: Object.values(CssOverflow),
    defaultValue: CssOverflow[0],
    isResponsive: true,
    description: 'Overflow behavior on the vertical axis.',
  },
  position: {
    options: Object.values(CssPosition),
    defaultValue: CssPosition[0],
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
    options: Object.values(CssTextAlign),
    defaultValue: CssTextAlign[0],
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
