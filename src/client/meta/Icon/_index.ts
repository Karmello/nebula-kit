import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'

import { ICON_PROPS_META } from './props'
import { ICON_EXAMPLES_META } from './examples'

const ICON_META: ComponentMeta<IconProps> = {
  overview: {
    description: 'A wrapper that renders an SVG from the icon set by name and applies system styles.',
    role: [
      'resolve icon by name',
      'apply sizing and color',
      'name is required to resolve and render the correct icon',
      'render an icon on its own when only the symbol is needed',
      'compose new components that require direct icon control',
      'access the raw SVG for custom sizing or color overrides',
    ],
  },
  props: ICON_PROPS_META,
  examples: ICON_EXAMPLES_META,
}

export default {
  Icon: ICON_META,
}
