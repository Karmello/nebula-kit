import { ComponentMeta } from 'client/definitions'
import { BoxProps } from 'lib/components'

import { BOX_PROPS_META } from './props'
import { BOX_EXAMPLES_META } from './examples'

const BOX_META: ComponentMeta<BoxProps> = {
  overview: {
    bundle: 'core',
    title:
      'Foundational surface component that exposes a curated set of core CSS properties - appearance, spacing, sizing and positioning - so you can style a plain block-level element directly in JSX.',
    description: [
      'acts as the surface foundation that higher-level components (e.g. Flex, Grid, Button, Text) render under the hood',
      'provides optional interactivity - hover and focus states',
      "can be used as a simple wrapper, similar to how you'd normally reach for <div>",
      'use "drawable" prop to turn Box into a surface that paints colors',
      'use "theme" prop to establish a new theme context for wrapping Box and its children',
      'use "brand" prop to apply a brand context to wrapping Box and its children',
    ],
    composedOf: ['HtmlTag'],
  },
  props: BOX_PROPS_META,
  examples: BOX_EXAMPLES_META,
  changelog: {
    '0.2.1': ['Released'],
  },
}

export default {
  Box: BOX_META,
}
