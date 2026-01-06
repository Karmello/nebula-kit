import { ComponentMeta } from 'client/definitions'
import { LinkProps } from 'lib/components'

import { LINK_EXAMPLES_META } from './examples'
import { LINK_PROPS_META } from './props'

const LINK_META: ComponentMeta<LinkProps> = {
  overview: {
    bundle: 'core',
    title: 'Wrapper that turns any interactive element into a navigable link.',
    description: [
      'clones its child and renders it as an <a> tag to enable navigation behavior',
      'removes the need to manually pass "tag", "onClick" or e.preventDefault() in components',
      'automatically prevents default browser navigation when "onClick" is provided, enabling custom routing',
      'accepts "href" and "target" for standard link attributes',
      'commonly used with Button or Text components for consistent navigation handling',
    ],
    topLevelTags: ['a'],
  },
  examples: LINK_EXAMPLES_META,
  props: LINK_PROPS_META,
  changelog: {
    '0.2.2': ['Released'],
  },
}

export default {
  Link: LINK_META,
}
