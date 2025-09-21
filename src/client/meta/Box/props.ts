import { ComponentMeta } from 'client/definitions'
import { CssDisplay, CssOverflow, CssPosition, CssTextAlign } from 'lib/definitions'

import {
  BoxIntent,
  BoxProps,
  BoxVariant,
  DEFAULT_BOX_INTENT,
  DEFAULT_BOX_VARIANT,
} from 'lib/components/base/Box/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const BOX_PROPS_META: ComponentMeta<BoxProps>['props'] = {
  variant: {
    options: Object.values(BoxVariant),
    defaultValue: DEFAULT_BOX_VARIANT,
    isRequired: false,
    isResponsive: false,
    description:
      'Controls the visual style of the Box, such as background or border treatment. Variants come from the design system to ensure consistent presentation across components.',
  },
  intent: {
    options: Object.values(BoxIntent),
    defaultValue: DEFAULT_BOX_INTENT,
    isRequired: false,
    isResponsive: true,
    description:
      'Defines the semantic role or tone of the Box, applying design-system colors and states consistently across components.',
  },
  opacity: {
    options: ['0 - 1'],
    defaultValue: '1',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the transparency level of the Box, from fully visible to fully transparent.',
  },
  borderRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: false,
    description:
      'Defines the corner rounding of the Box. By default corners are square, but you can customize rounding per component or set a global border radius through the provider for consistent styling across the system.',
  },
  interactive: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description:
      'Marks the Box as interactive, enabling visual feedback (such as hover or focus styles) and signaling that the element can respond to user actions.',
  },
  disabled: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description:
      'Indicates that the Box is inactive and non-interactive, applying visual styles and state to reflect its disabled condition.',
  },
  display: {
    options: Object.values(CssDisplay),
    defaultValue: CssDisplay[0],
    isRequired: false,
    isResponsive: true,
    description:
      'Determines how the Box is rendered in the layout, controlling its display behavior relative to surrounding elements.',
  },
  overflowX: {
    options: Object.values(CssOverflow),
    defaultValue: CssOverflow[0],
    isRequired: false,
    isResponsive: true,
    description:
      'Controls how content that exceeds the Box’s inline (horizontal) bounds is handled, including clipping and scroll behavior.',
  },
  overflowY: {
    options: Object.values(CssOverflow),
    defaultValue: CssOverflow[0],
    isRequired: false,
    isResponsive: true,
    description:
      'Controls how content that exceeds the Box’s block (vertical) bounds is handled, including clipping and scroll behavior.',
  },
  position: {
    options: Object.values(CssPosition),
    defaultValue: CssPosition[0],
    isRequired: false,
    isResponsive: true,
    description:
      'Defines how the Box participates in the layout flow and how it’s positioned relative to its containing block.',
  },
  top: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the offset from the top edge of the containing block when the Box is positioned.',
  },
  right: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the offset from the right edge of the containing block when the Box is positioned.',
  },
  bottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the offset from the bottom edge of the containing block when the Box is positioned.',
  },
  left: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Sets the offset from the left edge of the containing block when the Box is positioned.',
  },
  textAlign: {
    options: Object.values(CssTextAlign),
    defaultValue: CssTextAlign[0],
    isRequired: false,
    isResponsive: true,
    description:
      'Controls horizontal alignment of inline-level content (text and inline elements) inside the Box.',
  },
  blockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description:
      "Sets the Box's logical block dimension (commonly height). Respects writing mode and the min/max block-size constraints.",
  },
  minBlockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the minimum block dimension the Box can shrink to.',
  },
  maxBlockSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'none',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the maximum block dimension the Box can grow to.',
  },
  inlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description:
      'Sets the Box’s logical inline dimension (commonly width). Respects writing mode and the min/max inline-size constraints.',
  },
  minInlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the minimum inline dimension the Box can shrink to.',
  },
  maxInlineSize: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'none',
    isRequired: false,
    isResponsive: true,
    description: 'Defines the maximum inline dimension the Box can grow to.',
  },
  padding: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets padding on all sides of the Box.',
  },
  paddingInline: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets padding on the inline (horizontal) axis.',
  },
  paddingBlock: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets padding on the block (vertical) axis.',
  },
  paddingTop: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets padding on the block-start (top) side.',
  },
  paddingRight: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets padding on the inline-end (right) side.',
  },
  paddingBottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets padding on the block-end (bottom) side.',
  },
  paddingLeft: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets padding on the inline-start (left) side.',
  },
  margin: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets margin on all sides of the Box.',
  },
  marginInline: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets margin on the inline (horizontal) axis.',
  },
  marginBlock: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets margin on the block (vertical) axis.',
  },
  marginTop: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets margin on the block-start (top) side.',
  },
  marginRight: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets margin on the inline-end (right) side.',
  },
  marginBottom: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets margin on the block-end (bottom) side.',
  },
  marginLeft: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: 'Sets margin on the inline-start (left) side.',
  },
  ...HTML_TAG_PROPS_META,
}

export { BOX_PROPS_META }
