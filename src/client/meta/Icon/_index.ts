import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'

import { ICON_PROPS_META } from './props'
import { ICON_EXAMPLES_META } from './examples'

const ICON_META: ComponentMeta<IconProps> = {
  overview: {
    bundle: 'core',
    title: 'SVG icon wrapped in a styled inline container.',
    features: [
      'exposes a curated subset of icons from "Lucide React"',
      'allows rendering a custom SVG icon via children while preserving semantic styling',
    ],
    topLevelTags: ['span'],
    readMoreLink: {
      label: 'See all available icons',
      href: '/foundations/resources/assets/icons',
    },
  },
  props: ICON_PROPS_META,
  examples: ICON_EXAMPLES_META,
  changelog: {
    '0.2.3': ['Released'],
  },
}

export default {
  Icon: ICON_META,
}
