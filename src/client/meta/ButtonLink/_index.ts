import { ComponentMeta } from 'client/definitions'
import { ButtonLinkProps } from 'lib/components/controls/ButtonLink'

import { BUTTON_LINK_EXAMPLES_META } from './examples'
import { BUTTON_LINK_PROPS_META } from './props'

const BUTTON_LINK_META: ComponentMeta<ButtonLinkProps> = {
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
  examples: BUTTON_LINK_EXAMPLES_META,
  props: BUTTON_LINK_PROPS_META,
}

export default {
  ButtonLink: BUTTON_LINK_META,
}
