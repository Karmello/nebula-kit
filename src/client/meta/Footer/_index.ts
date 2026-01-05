import { ComponentMeta } from 'client/definitions'
import { FooterProps } from 'lib/components'

import { FOOTER_PROPS_META } from './props'
import { FOOTER_EXAMPLES_META } from './examples'

import { FOOTER_SECTION_META } from './FooterSection/_index'

const FOOTER_META: ComponentMeta<FooterProps> = {
  overview: {
    bundle: 'core',
    title: 'Layout component for organizing footer content into responsive sections.',
    description: [
      'commonly used inside AppFrame.Footer at the bottom of the page',
      'manages spacing and layout for all its sections',
      'renders as a <div> by default since AppFrame.Footer already renders as <footer>',
      'can be switched to a <footer> element when used standalone',
    ],
    composedOf: ['Flex'],
    topLevelTags: ['div', 'footer'],
    slots: ['Footer.Section'],
  },
  props: FOOTER_PROPS_META,
  examples: FOOTER_EXAMPLES_META,
  changelog: {
    '0.2.1': ['Released'],
  },
}

export default {
  Footer: FOOTER_META,
  'Footer.Section': FOOTER_SECTION_META,
}
