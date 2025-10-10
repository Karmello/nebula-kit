import { ComponentMeta } from 'client/definitions'
import { BreadcrumbProps } from 'lib/components'

import { BREADCRUMB_PROPS_META } from './props'
import { BREADCRUMB_EXAMPLES_META } from './examples'

const BREADCRUMB_META: ComponentMeta<BreadcrumbProps> = {
  overview: {
    title: "Horizontal navigation component for displaying the user's position within a page hierarchy.",
    description: [
      "provides a hierarchical trail of links that indicate the user's current position and enable navigation to parent pages",
    ],
    composedOf: ['Flex', 'Text'],
    rendersAs: ['div'],
  },
  props: BREADCRUMB_PROPS_META,
  examples: BREADCRUMB_EXAMPLES_META,
}

export default {
  Breadcrumb: BREADCRUMB_META,
}
