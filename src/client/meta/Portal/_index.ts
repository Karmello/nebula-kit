import { PortalProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { PORTAL_PROPS_META } from './props'
import { PORTAL_EXAMPLES_META } from './examples'

const PORTAL_META: ComponentMeta<PortalProps> = {
  overview: {
    bundle: 'core',
    title: 'Low-level utility component for rendering content outside the normal document flow.',
    description: [
      'renders children into a separate DOM node detached from the parent hierarchy',
      'enables floating UI patterns that must escape layout and stacking constraints',
      'supports positioning relative to an anchor element when needed',
      'serves as the foundation for dropdowns modals tooltips and other overlay components',
    ],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: PORTAL_PROPS_META,
  examples: PORTAL_EXAMPLES_META,
  changelog: {
    '0.2.2': ['Released'],
  },
}

export default {
  Portal: PORTAL_META,
}
