import { ComponentMeta } from 'client/definitions'
import { BoxProps } from 'lib/components/base/Box/definitions'

import { BOX_PROPS_META } from './props'
import { BOX_EXAMPLES_META } from './examples'

const BOX_META: ComponentMeta<BoxProps> = {
  overview: {
    bundle: 'core',
    title:
      'Foundational surface component that exposes a curated set of core CSS properties - appearance, spacing, sizing and positioning - so you can style a plain block-level element directly in JSX.',
    description: [
      'acts as the surface foundation that higher-level components (e.g. Flex, Grid) render under the hood',
      'provides optional interactivity (hover, active, focus states) for clickable or focusable surfaces',
      "can be used as a simple wrapper, similar to how you'd normally reach for <div>",
    ],
    composedOf: ['HtmlTag'],
  },
  props: BOX_PROPS_META,
  examples: BOX_EXAMPLES_META,
}

export default {
  Box: BOX_META,
}
