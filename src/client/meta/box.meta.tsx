import { Box } from 'lib/components'
import { CssDisplay, CssOverflow, CssPosition, CssTextAlign } from 'lib/definitions'
import { ComponentMeta } from 'client/definitions'

import {
  BOX_INHERITED_PROPS,
  BoxIntent,
  BoxOwnProps,
  BoxVariant,
  DEFAULT_BOX_INTENT,
  DEFAULT_BOX_VARIANT,
} from 'lib/components/base/Box/definitions'

const BOX_META: ComponentMeta<BoxOwnProps> = {
  overview: {
    description:
      'A foundational surface component that exposes a curated set of core CSS properties - appearance, spacing, sizing, and positioning - so you can style a plain block-level element directly in JSX.',
    role: [
      'acts as the surface foundation that higher-level components (e.g. Flex, Grid, Table) render under the hood',
      'provides optional interactivity (hover, focus, press states) for clickable or focusable surfaces',
    ],
    behavior: ['inherits all NativeElem props', 'accepts optional children and props'],
    byDefault: [
      'renders as a block-level <div>',
      'uses ghost variant with neutral intent',
      'applies zero spacing',
    ],
    examplesOfUse: [
      "use as a simple wrapper, the way you'd normally reach for a div",
      "use when you need a semantic element that isn't yet provided as a dedicated component in the library",
      'use as the base building block when creating your own custom component',
    ],
    composedOf: BOX_INHERITED_PROPS,
  },
  ownProps: [
    {
      name: 'variant',
      options: Object.values(BoxVariant),
      defaultValue: DEFAULT_BOX_VARIANT,
      isRequired: false,
      isResponsive: false,
      description:
        'Controls the visual style of the Box, such as background or border treatment. Variants come from the design system to ensure consistent presentation across components.',
    },
    {
      name: 'intent',
      options: Object.values(BoxIntent),
      defaultValue: DEFAULT_BOX_INTENT,
      isRequired: false,
      isResponsive: true,
      description:
        'Defines the semantic role or tone of the Box, applying design-system colors and states consistently across components.',
    },
    {
      name: 'opacity',
      options: ['0 - 1'],
      defaultValue: '1',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the transparency level of the Box, from fully visible to fully transparent.',
    },
    {
      name: 'borderRadius',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: false,
      description:
        'Defines the corner rounding of the Box. By default corners are square, but you can customize rounding per component or set a global border radius through the provider for consistent styling across the system.',
    },
    {
      name: 'interactive',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description:
        'Marks the Box as interactive, enabling visual feedback (such as hover or focus styles) and signaling that the element can respond to user actions.',
    },
    {
      name: 'disabled',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description:
        'Indicates that the Box is inactive and non-interactive, applying visual styles and state to reflect its disabled condition.',
    },
    {
      name: 'display',
      options: Object.values(CssDisplay),
      defaultValue: CssDisplay[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Determines how the Box is rendered in the layout, controlling its display behavior relative to surrounding elements.',
    },
    {
      name: 'overflowX',
      options: Object.values(CssOverflow),
      defaultValue: CssOverflow[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Controls how content that exceeds the Box’s inline (horizontal) bounds is handled, including clipping and scroll behavior.',
    },
    {
      name: 'overflowY',
      options: Object.values(CssOverflow),
      defaultValue: CssOverflow[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Controls how content that exceeds the Box’s block (vertical) bounds is handled, including clipping and scroll behavior.',
    },
    {
      name: 'position',
      options: Object.values(CssPosition),
      defaultValue: CssPosition[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Defines how the Box participates in the layout flow and how it’s positioned relative to its containing block.',
    },
    {
      name: 'top',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the offset from the top edge of the containing block when the Box is positioned.',
    },
    {
      name: 'right',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the offset from the right edge of the containing block when the Box is positioned.',
    },
    {
      name: 'bottom',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the offset from the bottom edge of the containing block when the Box is positioned.',
    },
    {
      name: 'left',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the offset from the left edge of the containing block when the Box is positioned.',
    },
    {
      name: 'textAlign',
      options: Object.values(CssTextAlign),
      defaultValue: CssTextAlign[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Controls horizontal alignment of inline-level content (text and inline elements) inside the Box.',
    },
    {
      name: 'blockSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description:
        "Sets the Box's logical block dimension (commonly height). Respects writing mode and the min/max block-size constraints.",
    },
    {
      name: 'minBlockSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the minimum block dimension the Box can shrink to.',
    },
    {
      name: 'maxBlockSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'none',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the maximum block dimension the Box can grow to.',
    },
    {
      name: 'inlineSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description:
        'Sets the Box’s logical inline dimension (commonly width). Respects writing mode and the min/max inline-size constraints.',
    },
    {
      name: 'minInlineSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the minimum inline dimension the Box can shrink to.',
    },
    {
      name: 'maxInlineSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'none',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the maximum inline dimension the Box can grow to.',
    },
    {
      name: 'padding',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on all sides of the Box.',
    },
    {
      name: 'paddingInline',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the inline (horizontal) axis.',
    },
    {
      name: 'paddingBlock',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the block (vertical) axis.',
    },
    {
      name: 'paddingTop',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the block-start (top) side.',
    },
    {
      name: 'paddingRight',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the inline-end (right) side.',
    },
    {
      name: 'paddingBottom',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the block-end (bottom) side.',
    },
    {
      name: 'paddingLeft',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the inline-start (left) side.',
    },
    {
      name: 'margin',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on all sides of the Box.',
    },
    {
      name: 'marginInline',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the inline (horizontal) axis.',
    },
    {
      name: 'marginBlock',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the block (vertical) axis.',
    },
    {
      name: 'marginTop',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the block-start (top) side.',
    },
    {
      name: 'marginRight',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the inline-end (right) side.',
    },
    {
      name: 'marginBottom',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the block-end (bottom) side.',
    },
    {
      name: 'marginLeft',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the inline-start (left) side.',
    },
  ],
  examples: [
    {
      jsx: <Box>Default box</Box>,
      description: 'A plain default Box with ghost variant and neutral intent.',
    },
    {
      jsx: (
        <Box variant="outline" intent="primary">
          Box is a block
        </Box>
      ),
      description:
        'A Box in outline variant with primary intent, rendering as a block that stretches full width by default.',
    },
    {
      jsx: (
        <Box variant="outline" intent="primary" padding={10}>
          Padded box
        </Box>
      ),
      description: 'Box with padding applied.',
    },
    {
      jsx: (
        <Box variant="outline" intent="primary" padding={10} textAlign="center">
          Centered content
        </Box>
      ),
      description: 'Box with the content centered.',
    },
    {
      jsx: (
        <Box variant="outline" intent="primary" padding={10} display="inline-block">
          Box as inline
        </Box>
      ),
      description:
        "A Box rendered as inline-block, so it's only as wide as its content instead of stretching full width.",
    },
    {
      jsx: (
        <Box variant="solid" intent="secondary" padding={10} interactive>
          Interactive Box
        </Box>
      ),
      description: 'An example of a Box component with a solid secondary style, and interactive behavior.',
    },
  ],
}

export default {
  Box: BOX_META,
}
