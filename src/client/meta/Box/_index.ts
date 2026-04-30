import { ComponentMeta } from 'client/definitions'
import { BoxProps } from 'lib/components'

import { BOX_PROPS_META } from './props'
import { BOX_EXAMPLES_META } from './examples'

const BOX_META: ComponentMeta<BoxProps> = {
  overview: {
    bundle: 'core',
    title: 'Foundational surface component that exposes a curated set of core CSS properties.',
    description:
      'Box is a foundational surface component that exposes a curated set of core CSS properties - appearance, spacing, sizing and positioning - so you can style a plain block-level element directly in JSX.',
    features: [
      'acts as the surface foundation that higher-level components (e.g. Flex, Grid, Button, Text) render under the hood',
      'provides optional interactivity - hover, active, focus, disabled and selected states',
      "can be used as a simple wrapper, similar to how you'd normally reach for <div>",
      'use "drawable" prop to turn Box into a surface that paints colors',
      'use "theme" prop to establish a new theme context for wrapping Box and its children',
      'use "brand" prop to apply a brand context to wrapping Box and its children',
      'use "surface" prop to control the depth style of the component',
    ],
    composedOf: ['HtmlTag'],
  },
  props: BOX_PROPS_META,
  examples: BOX_EXAMPLES_META,
  changelog: {
    '0.9.0': [
      'added hidden prop',
      'added support for the flipped theme value, allowing components to invert the nearest inherited theme within a subtree',
    ],
    '0.8.0': [
      'updated Box to always render internal ThemeProvider and BrandProvider, ensuring styling context is consistently resolved and propagates correctly through portals',
      'removed defaultState prop',
      'added selected prop',
      'changed elevated prop to surface',
    ],
    '0.7.0': [
      'added visual active state styling alongside hover for interactive Box',
      'added defaultState prop',
      'added activeOnFocus prop',
    ],
    '0.4.0': ['added visibility prop', 'added aspectRatio prop', 'added transform prop'],
    '0.2.3': ['released'],
  },
}

export default {
  Box: BOX_META,
}
