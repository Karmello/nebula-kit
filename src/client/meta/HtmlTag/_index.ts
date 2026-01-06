import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { HTML_TAG_PROPS_META } from './props'
import { HTML_TAG_EXAMPLES_META } from './examples'

const HTML_TAG_META: ComponentMeta<HtmlTagProps<ElementType>> = {
  overview: {
    bundle: 'core',
    title: 'Low-level component that renders an HTML tag.',
    description: [
      'renders the specified HTML tag',
      'forwards the relevant attributes for the tag',
      'passes through the ref',
      'polymorphic design lets you swap the underlying element while still receiving the correct props, ensuring the component resolves to a predictable, semantic element',
      'rarely needed - Box, Flex, Grid or other higher-level components usually fit better',
      'could be helpful as an escape hatch, if you need the absolute lowest layer without extra props or behaviors',
    ],
  },
  props: HTML_TAG_PROPS_META,
  examples: HTML_TAG_EXAMPLES_META,
  changelog: {
    '0.2.3': ['Released'],
  },
}

export default {
  HtmlTag: HTML_TAG_META,
}
