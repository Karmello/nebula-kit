import {
  CSS_CURSOR,
  CSS_DISPLAY,
  CSS_OVERFLOW,
  CSS_POINTER_EVENTS,
  CSS_POSITION,
  CSS_TEXT_ALIGN,
  CSS_VISIBILITY,
} from 'lib/constants'
import { ComponentMeta } from 'client/definitions'

import { type BoxProps } from '..'
import { BOX_COLORS, BOX_INTENTS, BOX_SURFACES, BOX_THEMES, BOX_VARIANTS } from '../constants'
import { BOX_CHANGELOG } from './changelog'
import { BOX_EXAMPLES } from './examples'

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
        options: ['string'],
        isResponsive: true,
        description: 'Defines the preferred width-to-height ratio of the component.',
        link: true,
      },
      blockSize: {
        options: ['string'],
        isResponsive: true,
        description: 'Logical height.',
        link: true,
      },
      borderBottomLeftRadius: {
        options: ['string'],
        isResponsive: true,
        description: 'Border radius for the bottom left corner.',
        link: true,
      },
      borderBottomRightRadius: {
        options: ['string'],
        isResponsive: true,
        description: 'Border radius for the bottom right corner.',
        link: true,
      },
      borderBottomWidth: {
        options: ['string'],
        isResponsive: true,
        description: 'Border width for the bottom side.',
        link: true,
      },
      borderLeftWidth: {
        options: ['string'],
        isResponsive: true,
        description: 'Border width for the left side.',
        link: true,
      },
      borderRadius: {
        options: ['string'],
        isResponsive: true,
        description: 'Sets border radius overriding global value set by NebkitProvider.',
        link: true,
      },
      borderRightWidth: {
        options: ['string'],
        isResponsive: true,
        description: 'Border width for the right side.',
        link: true,
      },
      borderTopLeftRadius: {
        options: ['string'],
        isResponsive: true,
        description: 'Border radius for the top left corner.',
        link: true,
      },
      borderTopRightRadius: {
        options: ['string'],
        isResponsive: true,
        description: 'Border radius for the top right corner.',
        link: true,
      },
      borderTopWidth: {
        options: ['string'],
        isResponsive: true,
        description: 'Border width for the top side.',
        link: true,
      },
      borderWidth: {
        options: ['string'],
        isResponsive: true,
        description: 'Sets border width overriding global value set by NebkitProvider.',
        link: true,
      },
      bottom: {
        options: ['string'],
        isResponsive: true,
        description: 'Bottom offset.',
        link: true,
      },
      brand: {
        options: BOX_COLORS,
        description: 'Default surface color context for the component and its descendants.',
      },
      children: {
        options: ['ReactNode'],
        description: 'Content rendered.',
      },
      color: {
        options: BOX_COLORS,
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
        options: ['string'],
        isResponsive: true,
        description: 'Logical width.',
        link: true,
      },
      inset: {
        options: ['string'],
        isResponsive: true,
        description: 'Shorthand for setting top, right, bottom and left offsets. Directional props override it.',
        link: true,
      },
      intent: {
        options: BOX_INTENTS,
        description: "Color tone applied to the component's main color.",
      },
      interactive: {
        options: ['boolean'],
        description:
          'Enables visual interaction affordances such as hover and active styling. Sets drawable to true automatically.',
      },
      left: {
        options: ['string'],
        isResponsive: true,
        description: 'Left offset.',
        link: true,
      },
      margin: {
        options: ['string'],
        isResponsive: true,
        description: 'Margin for all sides.',
        link: true,
      },
      marginBlock: {
        options: ['string'],
        isResponsive: true,
        description: 'Margin for the top and bottom sides.',
        link: true,
      },
      marginBottom: {
        options: ['string'],
        isResponsive: true,
        description: 'Margin for the bottom side.',
        link: true,
      },
      marginInline: {
        options: ['string'],
        isResponsive: true,
        description: 'Margin for the left and right sides.',
        link: true,
      },
      marginLeft: {
        options: ['string'],
        isResponsive: true,
        description: 'Margin for the left side.',
        link: true,
      },
      marginRight: {
        options: ['string'],
        isResponsive: true,
        description: 'Margin for the right side.',
        link: true,
      },
      marginTop: {
        options: ['string'],
        isResponsive: true,
        description: 'Margin for the top side.',
        link: true,
      },
      maxBlockSize: {
        options: ['string'],
        isResponsive: true,
        description: 'Maximum logical height.',
        link: true,
      },
      maxInlineSize: {
        options: ['string'],
        isResponsive: true,
        description: 'Maximum logical width.',
        link: true,
      },
      minBlockSize: {
        options: ['string'],
        isResponsive: true,
        description: 'Minimum logical height.',
        link: true,
      },
      minInlineSize: {
        options: ['string'],
        isResponsive: true,
        description: 'Minimum logical width.',
        link: true,
      },
      opacity: {
        options: ['string'],
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
        options: ['string'],
        isResponsive: true,
        description: 'Padding for all sides.',
        link: true,
      },
      paddingBlock: {
        options: ['string'],
        isResponsive: true,
        description: 'Padding for the top and bottom sides.',
        link: true,
      },
      paddingBottom: {
        options: ['string'],
        isResponsive: true,
        description: 'Padding for the bottom side.',
        link: true,
      },
      paddingInline: {
        options: ['string'],
        isResponsive: true,
        description: 'Padding for the left and right sides.',
        link: true,
      },
      paddingLeft: {
        options: ['string'],
        isResponsive: true,
        description: 'Padding for the left side.',
        link: true,
      },
      paddingRight: {
        options: ['string'],
        isResponsive: true,
        description: 'Padding for the right side.',
        link: true,
      },
      paddingTop: {
        options: ['string'],
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
        options: ['string'],
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
          'Sets a local theme boundary for the component and its drawable descendants. Supports explicit themes, the global application theme or the opposite of the global application theme.',
      },
      top: {
        options: ['string'],
        isResponsive: true,
        description: 'Top offset.',
        link: true,
      },
      transform: {
        options: ['string'],
        isResponsive: true,
        description: 'Applies a CSS transform for positional adjustment.',
        link: true,
      },
      variant: {
        options: BOX_VARIANTS,
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
    examples: BOX_EXAMPLES,
    changelog: BOX_CHANGELOG,
  } satisfies ComponentMeta<BoxProps>,
}
