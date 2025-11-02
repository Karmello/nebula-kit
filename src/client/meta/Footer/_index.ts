import { ComponentMeta } from 'client/definitions'
import { FooterProps } from 'lib/components'

import { FOOTER_PROPS_META } from './props'
import { FOOTER_EXAMPLES_META } from './examples'

import { FOOTER_SECTION_META } from './FooterSection/_index'

const FOOTER_META: ComponentMeta<FooterProps> = {
  overview: {
    plan: 'free',
    title:
      'Layout component that arranges content into adaptive sections, wrapping automatically to fit available space.',
    description: [
      'commonly used inside AppFrame.Footer at the bottom of the page',
      'renders as a <div> by default (AppFrame.Footer already renders as <footer>), but can be switched to a <footer> element if needed',
      'manages spacing for all its sections',
    ],
    composedOf: ['Flex'],
    rendersAs: ['div', 'footer'],
    slots: ['Footer.Section'],
  },
  props: FOOTER_PROPS_META,
  examples: FOOTER_EXAMPLES_META,
}

export default {
  Footer: FOOTER_META,
  'Footer.Section': FOOTER_SECTION_META,
}
