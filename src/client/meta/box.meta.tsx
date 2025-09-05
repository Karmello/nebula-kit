import { PropCategory } from 'client/definitions'
import { Box, BoxProps } from 'lib/components'

import {
  BoxIntent,
  BoxVariant,
  ComponentMeta,
  CssDisplay,
  CssOverflow,
  CssPosition,
  CssTextAlign,
  DEFAULT_BOX_INTENT,
  DEFAULT_BOX_VARIANT,
} from 'lib/definitions'

const BOX_META: ComponentMeta<BoxProps> = {
  overview: {
    name: 'Box',
    description:
      "Box is Nebula-kit's foundational surface. It exposes a curated set of core CSS properties - appearance, spacing, sizing, and positioning - so you can style a plain block-level element directly in JSX.",
    responsibilities: [
      'acts as the surface foundation that higher-level components (e.g. Flex, Grid, Table) inherit from',
    ],
    useCases: [
      "use as a simple wrapper, the way you'd normally reach for a div",
      "use when you need a semantic element that isn't yet provided as a dedicated component in the library",
      'use as the base building block when creating your own custom component',
    ],
    defaultBehavior: [
      'inherits all NativeElem props',
      'block element (renders as a div)',
      'children and all props are optional',
      'ghost variant + neutral intent',
      'all spacings zeroed',
    ],
  },
  props: [
    {
      category: PropCategory.element,
      name: 'elem',
      options: ['HTML tag'],
      defaultValue: '<div />',
      isRequired: false,
      isResponsive: false,
      description: 'Specifies which HTML element the Box should render as.',
    },
    {
      category: PropCategory.appearance,
      name: 'variant',
      options: Object.values(BoxVariant),
      defaultValue: DEFAULT_BOX_VARIANT,
      isRequired: false,
      isResponsive: false,
      description:
        'Controls the visual style of the Box, such as background or border treatment. Variants come from the design system to ensure consistent presentation across components.',
    },
    {
      category: PropCategory.appearance,
      name: 'intent',
      options: Object.values(BoxIntent),
      defaultValue: DEFAULT_BOX_INTENT,
      isRequired: false,
      isResponsive: false,
      description:
        'Defines the semantic role or tone of the Box, applying design-system colors and states consistently across components.',
    },
    {
      category: PropCategory.appearance,
      name: 'opacity',
      options: ['0 - 1'],
      defaultValue: '1',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the transparency level of the Box, from fully visible to fully transparent.',
    },
    {
      category: PropCategory.appearance,
      name: 'borderRadius',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: false,
      description:
        'Defines the corner rounding of the Box. By default corners are square, but you can customize rounding per component or set a global border radius through the provider for consistent styling across the system.',
    },
    {
      category: PropCategory.behavior,
      name: 'interactive',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description:
        'Marks the Box as interactive, enabling visual feedback (such as hover or focus styles) and signaling that the element can respond to user actions.',
    },
    {
      category: PropCategory.behavior,
      name: 'disabled',
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description:
        'Indicates that the Box is inactive and non-interactive, applying visual styles and state to reflect its disabled condition.',
    },
    {
      category: PropCategory.display,
      name: 'display',
      options: Object.values(CssDisplay),
      defaultValue: CssDisplay[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Determines how the Box is rendered in the layout, controlling its display behavior relative to surrounding elements.',
    },
    {
      category: PropCategory.display,
      name: 'overflowX',
      options: Object.values(CssOverflow),
      defaultValue: CssOverflow[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Controls how content that exceeds the Box’s inline (horizontal) bounds is handled, including clipping and scroll behavior.',
    },
    {
      category: PropCategory.display,
      name: 'overflowY',
      options: Object.values(CssOverflow),
      defaultValue: CssOverflow[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Controls how content that exceeds the Box’s block (vertical) bounds is handled, including clipping and scroll behavior.',
    },
    {
      category: PropCategory.display,
      name: 'position',
      options: Object.values(CssPosition),
      defaultValue: CssPosition[0],
      isRequired: false,
      isResponsive: true,
      description:
        'Defines how the Box participates in the layout flow and how it’s positioned relative to its containing block.',
    },
    {
      category: PropCategory.display,
      name: 'top',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the offset from the top edge of the containing block when the Box is positioned.',
    },
    {
      category: PropCategory.display,
      name: 'right',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the offset from the right edge of the containing block when the Box is positioned.',
    },
    {
      category: PropCategory.display,
      name: 'bottom',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the offset from the bottom edge of the containing block when the Box is positioned.',
    },
    {
      category: PropCategory.display,
      name: 'left',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Sets the offset from the left edge of the containing block when the Box is positioned.',
    },
    {
      category: PropCategory.display,
      name: 'textAlign',
      options: Object.values(CssTextAlign),
      defaultValue: CssTextAlign[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls the horizontal alignment of text content inside the Box.',
    },
    {
      category: PropCategory.sizing,
      name: 'blockSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description:
        "Sets the Box's logical block dimension (commonly height). Respects writing mode and the min/max block-size constraints.",
    },
    {
      category: PropCategory.sizing,
      name: 'minBlockSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the minimum block dimension the Box can shrink to.',
    },
    {
      category: PropCategory.sizing,
      name: 'maxBlockSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'none',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the maximum block dimension the Box can grow to.',
    },
    {
      category: PropCategory.sizing,
      name: 'inlineSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description:
        'Sets the Box’s logical inline dimension (commonly width). Respects writing mode and the min/max inline-size constraints.',
    },
    {
      category: PropCategory.sizing,
      name: 'minInlineSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the minimum inline dimension the Box can shrink to.',
    },
    {
      category: PropCategory.sizing,
      name: 'maxInlineSize',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'none',
      isRequired: false,
      isResponsive: true,
      description: 'Defines the maximum inline dimension the Box can grow to.',
    },
    {
      category: PropCategory.spacing,
      name: 'padding',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on all sides of the Box.',
    },
    {
      category: PropCategory.spacing,
      name: 'paddingInline',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the inline (horizontal) axis.',
    },
    {
      category: PropCategory.spacing,
      name: 'paddingBlock',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the block (vertical) axis.',
    },
    {
      category: PropCategory.spacing,
      name: 'paddingTop',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the block-start (top) side.',
    },
    {
      category: PropCategory.spacing,
      name: 'paddingRight',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the inline-end (right) side.',
    },
    {
      category: PropCategory.spacing,
      name: 'paddingBottom',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the block-end (bottom) side.',
    },
    {
      category: PropCategory.spacing,
      name: 'paddingLeft',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets padding on the inline-start (left) side.',
    },
    {
      category: PropCategory.spacing,
      name: 'margin',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on all sides of the Box.',
    },
    {
      category: PropCategory.spacing,
      name: 'marginInline',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the inline (horizontal) axis.',
    },
    {
      category: PropCategory.spacing,
      name: 'marginBlock',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the block (vertical) axis.',
    },
    {
      category: PropCategory.spacing,
      name: 'marginTop',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the block-start (top) side.',
    },
    {
      category: PropCategory.spacing,
      name: 'marginRight',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the inline-end (right) side.',
    },
    {
      category: PropCategory.spacing,
      name: 'marginBottom',
      options: ['ScaleValue', 'CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: 'Sets margin on the block-end (bottom) side.',
    },
    {
      category: PropCategory.spacing,
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
        <Box
          variant="outline"
          intent="primary"
          padding={10}
          display="inline-block"
          elem="a"
          elemProps={{ href: 'http://google.com', target: '_blank' }}
        >
          Box as link
        </Box>
      ),
      description: 'Box rendered as link element',
    },
  ],
}

const responsiveProps: typeof BOX_META.overview.responsiveProps = []

BOX_META.props.forEach(prop => {
  if (prop.isResponsive) {
    responsiveProps.push(prop.name)
  }
})

BOX_META.overview.responsiveProps = responsiveProps

export default BOX_META
