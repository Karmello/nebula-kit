import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'

import { ICON_PROPS_META } from './props'
import { ICON_EXAMPLES_META } from './examples'

const ICON_META: ComponentMeta<IconProps> = {
  overview: {
    title: 'SVG icon from the "Lucide React" set.',
    description: ['exposes a subset of icons provided by "Lucide React"'],
  },
  props: ICON_PROPS_META,
  examples: ICON_EXAMPLES_META,
}

export default {
  Icon: ICON_META,
}
