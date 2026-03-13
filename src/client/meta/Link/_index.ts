import { ComponentMeta } from 'client/definitions'
import { LinkProps } from 'lib/components'

import { LINK_EXAMPLES_META } from './examples'
import { LINK_PROPS_META } from './props'

const LINK_META: ComponentMeta<LinkProps> = {
  overview: {
    bundle: 'core',
    title: 'Wrapper that makes components navigable.',
    description:
      "Link makes its child navigable while ensuring valid and accessible HTML. By default, Link wraps its content with an anchor element. For Button and Text components, it instead replaces the underlying tag with <a> to avoid invalid nested interactions. When an onClick handler is provided, Link automatically prevents the browser's default navigation behavior, allowing you to handle routing or custom logic manually.",
    features: [
      'makes any wrapped content navigable via a single API',
      'automatically chooses the correct HTML structure under the hood',
      'supports href and target for standard link behavior',
    ],
    topLevelTags: ['a'],
  },
  examples: LINK_EXAMPLES_META,
  props: LINK_PROPS_META,
  changelog: {
    '0.4.0': ['changed behavior to wrap content by default and only clone when required to ensure valid HTML'],
    '0.2.3': ['released'],
  },
}

export default {
  Link: LINK_META,
}
