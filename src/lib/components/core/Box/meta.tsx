import {
  COLORS,
  CSS_CURSOR,
  CSS_DISPLAY,
  CSS_OVERFLOW,
  CSS_POINTER_EVENTS,
  CSS_POSITION,
  CSS_TEXT_ALIGN,
  CSS_VISIBILITY,
  PROP_GROUPS,
  TSHIRT_SIZES,
} from 'lib/constants'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BoxProps } from '.'
import { Box } from './box'
import { BOX_INTENTS, BOX_SURFACES, BOX_THEMES, BOX_VARIANTS } from './constants'

export const BOX_META = {
  Box: {
    overview: {
      bundle: 'core',
      title: 'Foundational visual surface component that exposes a curated set of core CSS properties.',
      description:
        'Box is a foundational visual surface component that exposes a curated set of core CSS properties - appearance, spacing, sizing and positioning - so you can style a plain block-level element directly in JSX.',
      features: [
        'acts as the surface foundation that higher-level components (e.g. Flex, Grid, Button, Text) render under the hood',
        'provides optional interactivity - hover, active, focus, disabled and selected states',
        "can be used as a simple wrapper, similar to how you'd normally reach for <div>",
      ],
      guidelines: [
        'use `drawable` prop to turn Box into a surface that paints colors',
        'use `theme` prop to establish a new theme context for wrapping Box and its children',
        'use `brand` prop to apply a brand context to wrapping Box and its children',
        'use `surface` prop to control the depth style of the component',
      ],
    },
    props: {
      drawable: {
        group: PROP_GROUPS.SURFACE,
        options: ['boolean'],
        description:
          'Enables visual rendering. When true, the Box can draw a surface using variant and intent. When false, it is structural and has no visual styling.',
      },
      elevated: {
        group: PROP_GROUPS.SURFACE,
        options: ['boolean'],
        description:
          'Shifts the component onto an elevated surface level, adjusting the base surface and all related interaction states together.',
      },
      theme: {
        group: PROP_GROUPS.SURFACE,
        options: BOX_THEMES,
        isResponsive: true,
        description:
          'Sets a local theme boundary for the component and its drawable descendants. Overrides the resolved theme for this subtree. Use flipped to invert the resolved theme at this boundary.',
      },
      brand: {
        group: PROP_GROUPS.SURFACE,
        options: COLORS,
        isResponsive: true,
        description: 'Default surface color context for the component and its descendants.',
      },
      color: {
        group: PROP_GROUPS.SURFACE,
        options: COLORS,
        isResponsive: true,
        description: 'Color applied to the component.',
      },
      variant: {
        group: PROP_GROUPS.SURFACE,
        options: BOX_VARIANTS,
        isResponsive: true,
        description: 'Visual style variant.',
      },
      intent: {
        group: PROP_GROUPS.SURFACE,
        options: BOX_INTENTS,
        isResponsive: true,
        description: "Color tone applied to the component's main color.",
      },
      interactive: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        description:
          'Enables visual interaction affordances such as hover and active styling. Sets drawable to true automatically.',
      },
      surface: {
        group: PROP_GROUPS.INTERACTION,
        options: BOX_SURFACES,
        description: 'Applies a persistent surface behavior that overrides transient interaction states like hover and active.',
      },
      ripple: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        description: 'Toggles the ripple effect on pointer interaction.',
      },
      disabled: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        description: 'Disables the component and its interactions.',
      },
      activeOnFocus: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        description: 'Applies the active (pressed) visual state while the element is focused.',
      },
      cursor: {
        group: PROP_GROUPS.INTERACTION,
        options: CSS_CURSOR,
        description: 'Controls the mouse cursor shown when hovering over the element.',
      },
      hidden: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        isResponsive: true,
        description: 'Controls whether the element is hidden and removed from layout.',
      },
      pointerEvents: {
        group: PROP_GROUPS.INTERACTION,
        options: CSS_POINTER_EVENTS,
        description: 'Controls whether the element can receive pointer interactions.',
        link: true,
      },
      opacity: {
        group: PROP_GROUPS.APPEARANCE,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Transparency level, from fully visible to fully transparent.',
        link: true,
      },
      visibility: {
        group: PROP_GROUPS.APPEARANCE,
        options: Object.values(CSS_VISIBILITY),
        isResponsive: true,
        description: 'Controls whether the element is visible without affecting layout.',
        link: true,
      },
      textAlign: {
        group: PROP_GROUPS.APPEARANCE,
        options: CSS_TEXT_ALIGN,
        isResponsive: true,
        description: 'Text alignment within the component.',
        link: true,
      },
      zIndex: {
        group: PROP_GROUPS.APPEARANCE,
        options: ['number'],
        isResponsive: true,
        description: 'Controls the stacking order.',
        link: true,
      },
      aspectRatio: {
        group: PROP_GROUPS.APPEARANCE,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Defines the preferred width-to-height ratio of the component.',
        link: true,
      },
      transform: {
        group: PROP_GROUPS.APPEARANCE,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Applies a CSS transform for positional adjustment.',
        link: true,
      },
      display: {
        group: PROP_GROUPS.LAYOUT,
        options: CSS_DISPLAY,
        isResponsive: true,
        description: 'Display type controlling how the component is laid out.',
        link: true,
      },
      overflow: {
        group: PROP_GROUPS.LAYOUT,
        options: CSS_OVERFLOW,
        isResponsive: true,
        description: 'Overflow behavior for both axes.',
        link: true,
      },
      overflowX: {
        group: PROP_GROUPS.LAYOUT,
        options: CSS_OVERFLOW,
        isResponsive: true,
        description: 'Overflow behavior on the horizontal axis.',
        link: true,
      },
      overflowY: {
        group: PROP_GROUPS.LAYOUT,
        options: CSS_OVERFLOW,
        isResponsive: true,
        description: 'Overflow behavior on the vertical axis.',
        link: true,
      },
      position: {
        group: PROP_GROUPS.LAYOUT,
        options: CSS_POSITION,
        isResponsive: true,
        description: 'Position in the layout flow.',
        link: true,
      },
      inset: {
        group: PROP_GROUPS.LAYOUT,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Shorthand for setting top, right, bottom and left offsets. Directional props override it.',
        link: true,
      },
      top: {
        group: PROP_GROUPS.LAYOUT,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Top offset.',
        link: true,
      },
      right: {
        group: PROP_GROUPS.LAYOUT,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Right offset.',
        link: true,
      },
      bottom: {
        group: PROP_GROUPS.LAYOUT,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Bottom offset.',
        link: true,
      },
      left: {
        group: PROP_GROUPS.LAYOUT,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Left offset.',
        link: true,
      },
      blockSize: {
        group: PROP_GROUPS.SIZE,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Logical height.',
        link: true,
      },
      minBlockSize: {
        group: PROP_GROUPS.SIZE,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Minimum logical height.',
        link: true,
      },
      maxBlockSize: {
        group: PROP_GROUPS.SIZE,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Maximum logical height.',
        link: true,
      },
      inlineSize: {
        group: PROP_GROUPS.SIZE,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Logical width.',
        link: true,
      },
      minInlineSize: {
        group: PROP_GROUPS.SIZE,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Minimum logical width.',
        link: true,
      },
      maxInlineSize: {
        group: PROP_GROUPS.SIZE,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Maximum logical width.',
        link: true,
      },
      padding: {
        group: PROP_GROUPS.PADDING,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for all sides.',
        link: true,
      },
      paddingInline: {
        group: PROP_GROUPS.PADDING,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the left and right sides.',
        link: true,
      },
      paddingBlock: {
        group: PROP_GROUPS.PADDING,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the top and bottom sides.',
        link: true,
      },
      paddingTop: {
        group: PROP_GROUPS.PADDING,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the top side.',
        link: true,
      },
      paddingRight: {
        group: PROP_GROUPS.PADDING,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the right side.',
        link: true,
      },
      paddingBottom: {
        group: PROP_GROUPS.PADDING,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the bottom side.',
        link: true,
      },
      paddingLeft: {
        group: PROP_GROUPS.PADDING,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the left side.',
        link: true,
      },

      margin: {
        group: PROP_GROUPS.MARGIN,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for all sides.',
        link: true,
      },
      marginInline: {
        group: PROP_GROUPS.MARGIN,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the left and right sides.',
        link: true,
      },
      marginBlock: {
        group: PROP_GROUPS.MARGIN,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the top and bottom sides.',
        link: true,
      },
      marginTop: {
        group: PROP_GROUPS.MARGIN,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the top side.',
        link: true,
      },
      marginRight: {
        group: PROP_GROUPS.MARGIN,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the right side.',
        link: true,
      },
      marginBottom: {
        group: PROP_GROUPS.MARGIN,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the bottom side.',
        link: true,
      },
      marginLeft: {
        group: PROP_GROUPS.MARGIN,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the left side.',
        link: true,
      },
      borderWidth: {
        group: PROP_GROUPS.BORDER,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets border width overriding global value set by NebkitProvider.',
        link: true,
      },
      borderTopWidth: {
        group: PROP_GROUPS.BORDER,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border width for the top side.',
        link: true,
      },
      borderRightWidth: {
        group: PROP_GROUPS.BORDER,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border width for the right side.',
        link: true,
      },
      borderBottomWidth: {
        group: PROP_GROUPS.BORDER,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border width for the bottom side.',
        link: true,
      },
      borderLeftWidth: {
        group: PROP_GROUPS.BORDER,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border width for the left side.',
        link: true,
      },
      borderRadius: {
        group: PROP_GROUPS.BORDER_RADIUS,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets border radius overriding global value set by NebkitProvider.',
        link: true,
      },
      borderTopLeftRadius: {
        group: PROP_GROUPS.BORDER_RADIUS,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border radius for the top left corner.',
        link: true,
      },
      borderTopRightRadius: {
        group: PROP_GROUPS.BORDER_RADIUS,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border radius for the top right corner.',
        link: true,
      },
      borderBottomRightRadius: {
        group: PROP_GROUPS.BORDER_RADIUS,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border radius for the bottom right corner.',
        link: true,
      },
      borderBottomLeftRadius: {
        group: PROP_GROUPS.BORDER_RADIUS,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border radius for the bottom left corner.',
        link: true,
      },
      children: {
        group: PROP_GROUPS.ROOT,
        options: ['ReactNode'],
        description: 'Content rendered.',
      },
      tag: {
        group: PROP_GROUPS.ROOT,
        options: ['HTML tag'],
        defaultValue: 'div',
        description: 'The HTML tag to be rendered as the container.',
      },
      tagAttrs: {
        group: PROP_GROUPS.ROOT,
        options: ['HTML tag attributes'],
        description: 'Additional HTML attributes applied to the root tag.',
      },
      tagRef: {
        group: PROP_GROUPS.ROOT,
        options: ['RefObject'],
        description: 'Reference to the root HTML tag.',
      },
    },
    examples: [
      {
        jsx: <Box>Default box</Box>,
        description:
          'By default Box is non-drawable. It does not paint any colors and serves only as a structural container for layout and composition.',
      },
      {
        jsx: (
          <Box drawable variant="outline" intent="primary">
            Box is a block
          </Box>
        ),
        description: 'Drawable Box renders as a block element that stretches to full width by default.',
      },
      {
        jsx: (
          <Box drawable variant="outline" intent="primary" padding="20px">
            Padded box
          </Box>
        ),
        description: 'Box with padding applied.',
      },
      {
        jsx: (
          <Box drawable variant="outline" intent="primary" padding="20px" textAlign="center">
            Centered content
          </Box>
        ),
        description: 'Box with the content centered.',
      },
      {
        jsx: (
          <Box drawable variant="outline" intent="primary" padding="20px" display="inline-block">
            Box as inline block
          </Box>
        ),
        description: "Box rendered as inline-block, so it's only as wide as its content.",
      },
      {
        jsx: (
          <Box drawable interactive variant="solid" intent="primary" padding="20px">
            Interactive Box
          </Box>
        ),
        description: 'Box with interactive behavior.',
      },
      {
        jsx: (
          <Box drawable interactive disabled variant="solid" intent="primary" padding="20px">
            Disabled Box
          </Box>
        ),
        description: 'Interactive Box in disabled state.',
      },
    ],
    changelog: {
      '0.9.0': [
        'added `hidden` prop',
        'added support for the flipped `theme` value, allowing components to invert the nearest inherited theme within a subtree',
        'changed `surface` prop to `elevated`',
        'changed `selected` prop to `surface`',
      ],
      '0.8.0': [
        'updated Box to always render internal `ThemeProvider` and `BrandProvider`, ensuring styling context is consistently resolved and propagates correctly through portals',
        'removed `defaultState` prop',
        'added `selected` prop',
        'changed `elevated` prop to `surface`',
      ],
      '0.7.0': [
        'added visual active state styling alongside hover for interactive Box',
        'added `defaultState` prop',
        'added `activeOnFocus` prop',
      ],
      '0.4.0': ['added `visibility` prop', 'added `aspectRatio` prop', 'added `transform` prop'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<BoxProps>,
}
