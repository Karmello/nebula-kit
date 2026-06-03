import {
  COLORS,
  CSS_CURSOR,
  CSS_DISPLAY,
  CSS_OVERFLOW,
  CSS_POINTER_EVENTS,
  CSS_POSITION,
  CSS_TEXT_ALIGN,
  CSS_VISIBILITY,
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
      activeOnFocus: {
        options: ['boolean'],
        description: 'Applies the active (pressed) visual state while the element is focused.',
      },
      aspectRatio: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Defines the preferred width-to-height ratio of the component.',
        link: true,
      },
      blockSize: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Logical height.',
        link: true,
      },
      borderBottomLeftRadius: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border radius for the bottom left corner.',
        link: true,
      },
      borderBottomRightRadius: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border radius for the bottom right corner.',
        link: true,
      },
      borderBottomWidth: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border width for the bottom side.',
        link: true,
      },
      borderLeftWidth: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border width for the left side.',
        link: true,
      },
      borderRadius: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets border radius overriding global value set by NebkitProvider.',
        link: true,
      },
      borderRightWidth: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border width for the right side.',
        link: true,
      },
      borderTopLeftRadius: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border radius for the top left corner.',
        link: true,
      },
      borderTopRightRadius: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border radius for the top right corner.',
        link: true,
      },
      borderTopWidth: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Border width for the top side.',
        link: true,
      },
      borderWidth: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets border width overriding global value set by NebkitProvider.',
        link: true,
      },
      bottom: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Bottom offset.',
        link: true,
      },
      brand: {
        options: COLORS,
        isResponsive: true,
        description: 'Default surface color context for the component and its descendants.',
      },
      children: {
        options: ['ReactNode'],
        description: 'Content rendered.',
      },
      color: {
        options: COLORS,
        isResponsive: true,
        description: 'Color applied to the component.',
      },
      cursor: {
        options: CSS_CURSOR,
        description: 'Controls the mouse cursor shown when hovering over the element.',
      },
      disabled: {
        options: ['boolean'],
        description: 'Disables the component and its interactions.',
      },
      display: {
        options: CSS_DISPLAY,
        isResponsive: true,
        description: 'Display type controlling how the component is laid out.',
        link: true,
      },
      drawable: {
        options: ['boolean'],
        description:
          'Enables visual rendering. When true, the Box can draw a surface using variant and intent. When false, it is structural and has no visual styling.',
      },
      elevated: {
        options: ['boolean'],
        description:
          'Shifts the component onto an elevated surface level, adjusting the base surface and all related interaction states together.',
      },
      hidden: {
        options: ['boolean'],
        isResponsive: true,
        description: 'Controls whether the element is hidden and removed from layout.',
      },
      inlineSize: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Logical width.',
        link: true,
      },
      inset: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Shorthand for setting top, right, bottom and left offsets. Directional props override it.',
        link: true,
      },
      intent: {
        options: BOX_INTENTS,
        isResponsive: true,
        description: "Color tone applied to the component's main color.",
      },
      interactive: {
        options: ['boolean'],
        description:
          'Enables visual interaction affordances such as hover and active styling. Sets drawable to true automatically.',
      },
      left: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Left offset.',
        link: true,
      },
      margin: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for all sides.',
        link: true,
      },
      marginBlock: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the top and bottom sides.',
        link: true,
      },
      marginBottom: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the bottom side.',
        link: true,
      },
      marginInline: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the left and right sides.',
        link: true,
      },
      marginLeft: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the left side.',
        link: true,
      },
      marginRight: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the right side.',
        link: true,
      },
      marginTop: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Margin for the top side.',
        link: true,
      },
      maxBlockSize: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Maximum logical height.',
        link: true,
      },
      maxInlineSize: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Maximum logical width.',
        link: true,
      },
      minBlockSize: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Minimum logical height.',
        link: true,
      },
      minInlineSize: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Minimum logical width.',
        link: true,
      },
      opacity: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Transparency level, from fully visible to fully transparent.',
        link: true,
      },
      overflow: {
        options: CSS_OVERFLOW,
        isResponsive: true,
        description: 'Overflow behavior for both axes.',
        link: true,
      },
      overflowX: {
        options: CSS_OVERFLOW,
        isResponsive: true,
        description: 'Overflow behavior on the horizontal axis.',
        link: true,
      },
      overflowY: {
        options: CSS_OVERFLOW,
        isResponsive: true,
        description: 'Overflow behavior on the vertical axis.',
        link: true,
      },
      padding: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for all sides.',
        link: true,
      },
      paddingBlock: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the top and bottom sides.',
        link: true,
      },
      paddingBottom: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the bottom side.',
        link: true,
      },
      paddingInline: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the left and right sides.',
        link: true,
      },
      paddingLeft: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the left side.',
        link: true,
      },
      paddingRight: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the right side.',
        link: true,
      },
      paddingTop: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Padding for the top side.',
        link: true,
      },
      pointerEvents: {
        options: CSS_POINTER_EVENTS,
        description: 'Controls whether the element can receive pointer interactions.',
        link: true,
      },
      position: {
        options: CSS_POSITION,
        isResponsive: true,
        description: 'Position in the layout flow.',
        link: true,
      },
      right: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Right offset.',
        link: true,
      },
      ripple: {
        options: ['boolean'],
        description: 'Toggles the ripple effect on pointer interaction.',
      },
      surface: {
        options: BOX_SURFACES,
        description: 'Applies a persistent surface behavior that overrides transient interaction states like hover and active.',
      },
      tag: {
        options: ['HTML tag'],
        defaultValue: 'div',
        description: 'The HTML tag to be rendered as the container.',
      },
      tagAttrs: {
        options: ['HTML tag attributes'],
        description: 'Additional HTML attributes applied to the root tag.',
      },
      tagRef: {
        options: ['RefObject'],
        description: 'Reference to the root HTML tag.',
      },
      textAlign: {
        options: CSS_TEXT_ALIGN,
        isResponsive: true,
        description: 'Text alignment within the component.',
        link: true,
      },
      theme: {
        options: BOX_THEMES,
        isResponsive: true,
        description:
          'Sets a local theme boundary for the component and its drawable descendants. Overrides the resolved theme for this subtree. Use flipped to invert the resolved theme at this boundary.',
      },
      top: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Top offset.',
        link: true,
      },
      transform: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Applies a CSS transform for positional adjustment.',
        link: true,
      },
      variant: {
        options: BOX_VARIANTS,
        isResponsive: true,
        description: 'Visual style variant.',
      },
      visibility: {
        options: Object.values(CSS_VISIBILITY),
        isResponsive: true,
        description: 'Controls whether the element is visible without affecting layout.',
        link: true,
      },
      zIndex: {
        options: ['number'],
        isResponsive: true,
        description: 'Controls the stacking order.',
        link: true,
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
  } as ComponentMeta<BoxProps>,
}
