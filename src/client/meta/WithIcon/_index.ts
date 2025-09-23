import { ComponentMeta } from 'client/definitions'
import { WithIconProps } from 'lib/components/elements/WithIcon/definitions'

import { WITH_ICON_PROPS_META } from './props'
import { WITH_ICON_EXAMPLES_META } from './examples'

const WITH_ICON_META: ComponentMeta<WithIconProps> = {
  overview: {
    title: 'Wrapper that positions an icon in line with its content.',
    description: ['renders an icon next to the children passed, either on the left or right'],
    composedOf: ['HtmlTag'],
    rendersAs: ['span'],
  },
  props: WITH_ICON_PROPS_META,
  examples: WITH_ICON_EXAMPLES_META,
}

export default {
  WithIcon: WITH_ICON_META,
}
