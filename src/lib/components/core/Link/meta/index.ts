import { LinkProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_LINK_TARGET, LINK_TARGETS } from '../definitions'
import { LINK_CHANGELOG } from './changelog'
import { LINK_EXAMPLES } from './examples'

export const LINK_META = {
  Link: {
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
      exposedTags: ['a'],
    },
    examples: LINK_EXAMPLES,
    props: {
      children: {
        options: ['ReactNode'],
        isRequired: true,
        description: 'Single child component to be wrapped.',
      },
      href: {
        options: ['string'],
        isRequired: true,
        description: 'Destination URL.',
      },
      target: {
        options: LINK_TARGETS,
        defaultValue: DEFAULT_LINK_TARGET,
        description: 'Specifies where to open the linked document, following the standard HTML target attribute behavior.',
      },
      onClick: {
        options: ['e => void'],
        description: 'Callback fired when the component is clicked. Automatically prevents default navigation when provided.',
      },
    },
    changelog: LINK_CHANGELOG,
  } satisfies ComponentMeta<LinkProps>,
}
