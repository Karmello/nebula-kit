import { ComponentMeta } from 'client/definitions'

import { type BreadcrumbProps } from '../definitions'
import { BREADCRUMB_PROPS_META } from './props'
import { BREADCRUMB_EXAMPLES_META } from './examples'

const BREADCRUMB_META: ComponentMeta<BreadcrumbProps> = {
  overview: {
    bundle: 'pro',
    title: 'Interactive hierarchical navigation control for selecting and modifying a position within a structured path.',
    features: [
      'displays a hierarchical path using interactive DropdownList components',
      'reveals navigation levels progressively based on user selection',
      'emits explicit user intent without guessing defaults or completing paths',
      'supports both uncontrolled and fully controlled usage patterns',
      'integrates cleanly with routing, configuration and non-routing flows',
      'keeps application logic and navigation policy outside the component',
    ],
    composedOf: ['Box', 'Flex', 'Icon', 'Text'],
    topLevelTags: ['div', 'nav', 'section'],
  },
  props: BREADCRUMB_PROPS_META,
  examples: BREADCRUMB_EXAMPLES_META,
  changelog: {
    '0.7.0': ['removed `itemBorderIntent` prop'],
    '0.6.0': ['added `itemBorderIntent` prop'],
    '0.2.3': ['released'],
  },
}

export default {
  Breadcrumb: BREADCRUMB_META,
}
