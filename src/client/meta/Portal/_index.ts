import { PortalProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { PORTAL_PROPS_META } from './props'
import { PORTAL_EXAMPLES_META } from './examples'

const PORTAL_META: ComponentMeta<PortalProps> = {
  overview: {
    title:
      'Container that renders its children into a separate DOM node, allowing content to appear above the main document flow.',
    description: [
      'mounts content in a dedicated layer outside the parent hierarchy',
      'supports dynamic positioning relative to an anchor element',
      'commonly used for dropdowns, modals, and tooltips',
    ],
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: PORTAL_PROPS_META,
  examples: PORTAL_EXAMPLES_META,
}

export default {
  Portal: PORTAL_META,
}
