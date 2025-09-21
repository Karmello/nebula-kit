import { ComponentMeta } from 'client/definitions'
import { WITH_ICON_INHERITED_PROPS, WithIconOwnProps } from 'lib/components/utility/WithIcon/definitions'

import props from './props'
import examples from './examples'

const WITH_ICON_META: ComponentMeta<WithIconOwnProps> = {
  overview: {
    description: 'A wrapper that positions an icon in line with its content.',
    role: ['insert an icon', 'render children exactly as passed'],
    behavior: [
      'wraps the icon and children in a <span> element',
      'iconName is required to render an icon',
      'if no children are provided, only the icon is rendered',
    ],
    byDefault: ['iconPosition defaults to left'],
    examplesOfUse: [
      'add an icon to text or inline content',
      'compose higher-level components that support icons',
    ],
    composedOf: WITH_ICON_INHERITED_PROPS,
    rendersAs: ['span'],
  },
  props,
  examples,
}

export default {
  WithIcon: WITH_ICON_META,
}
