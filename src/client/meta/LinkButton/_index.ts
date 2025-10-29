import { ComponentMeta } from 'client/definitions'
import { LinkButtonProps } from 'lib/components/controls/LinkButton'

import { LINK_BUTTON_EXAMPLES_META } from './examples'
import { LINK_BUTTON_PROPS_META } from './props'

const LINK_BUTTON_META: ComponentMeta<LinkButtonProps> = {
  overview: {
    title: 'Button-like link component that handles navigation and click behavior automatically.',
    description: [
      'automatically prevents the default link navigation when a custom onClick handler is passed',
      'simplifies navigation logic by allowing custom route handling without manual e.preventDefault()',
      'designed for cases where links need to look and behave like buttons while preserving accessibility',
    ],
    composedOf: ['Button'],
    rendersAs: ['a'],
  },
  examples: LINK_BUTTON_EXAMPLES_META,
  props: LINK_BUTTON_PROPS_META,
}

export default {
  LinkButton: LINK_BUTTON_META,
}
