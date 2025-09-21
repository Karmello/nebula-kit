import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import ownProps from './own-props'
import examples from './examples'

const HTML_TAG_META: ComponentMeta<HtmlTagProps<ElementType>> = {
  overview: {
    description:
      'A low-level utility that renders the chosen HTML tag. Its polymorphic design means you can swap the underlying element while still getting the correct props, ensuring every NebulaKit component resolves to a predictable, semantic element.',
    role: [
      'renders the chosen HTML tag',
      'forwards the relevant attributes for the tag',
      'passes through the ref',
    ],
    byDefault: ['renders as div'],
    examplesOfUse: [
      'rarely needed in everyday code - usually you would want to use Box, Flex, Grid, or other higher-level component instead',
      'could be helpful as an escape hatch if you need the absolute lowest layer without extra props or behaviors',
    ],
  },
  ownProps,
  examples,
}

export default {
  HtmlTag: HTML_TAG_META,
}
