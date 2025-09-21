import { ComponentMeta } from 'client/definitions'
import { SvgIconProps } from 'lib/components'

import ownProps from './own-props'
import examples from './examples'

const SVG_ICON_META: ComponentMeta<SvgIconProps> = {
  overview: {
    description: 'A wrapper that renders an SVG from the icon set by name and applies system styles.',
    role: ['resolve icon by name', 'apply sizing and color'],
    behavior: ['name is required to resolve and render the correct icon'],
    byDefault: [
      'size defaults to 8 (16px) for standard readability',
      'intent defaults to neutral for balanced, non-emphasized color',
    ],
    examplesOfUse: [
      'render an icon on its own when only the symbol is needed',
      'compose new components that require direct icon control',
      'access the raw SVG for custom sizing or color overrides',
    ],
  },
  ownProps,
  examples,
}

export default {
  SvgIcon: SVG_ICON_META,
}
