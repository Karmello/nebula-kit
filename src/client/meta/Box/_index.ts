import { ComponentMeta } from 'client/definitions'
import { BoxOwnProps } from 'lib/components/base/Box/definitions'

import { BOX_PROPS_META } from './props'
import { BOX_EXAMPLES_META } from './examples'

const BOX_META: ComponentMeta<BoxOwnProps> = {
  overview: {
    description:
      'A foundational surface component that exposes a curated set of core CSS properties - appearance, spacing, sizing, and positioning - so you can style a plain block-level element directly in JSX.',
    role: [
      'acts as the surface foundation that higher-level components (e.g. Flex, Grid, Table) render under the hood',
      'provides optional interactivity (hover, focus, press states) for clickable or focusable surfaces',
    ],
    behavior: ['inherits all HtmlTag props', 'accepts optional children and props'],
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
    composedOf: ['HtmlTag'],
  },
  props: BOX_PROPS_META,
  examples: BOX_EXAMPLES_META,
}

export default {
  Box: BOX_META,
}
