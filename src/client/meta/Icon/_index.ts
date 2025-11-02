import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'

import { ICON_PROPS_META } from './props'
import { ICON_EXAMPLES_META } from './examples'

const ICON_META: ComponentMeta<IconProps> = {
  overview: {
    plan: 'free',
    title: 'SVG icon from the "Lucide React" set.',
    description: ['exposes a subset of icons provided by "Lucide React"'],
    rendersAs: ['Svg'],
    readMoreLink: {
      label: 'See all icons',
      href: '/foundations/resources/assets/icons',
    },
  },
  props: ICON_PROPS_META,
  examples: ICON_EXAMPLES_META,
}

export default {
  Icon: ICON_META,
}
