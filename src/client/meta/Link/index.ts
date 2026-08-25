import {
  DEFAULT_LINK_COMPOSE_MODE,
  DEFAULT_LINK_TARGET,
  LINK_COMPOSE_MODES,
  LINK_TARGETS,
} from 'lib/components/core/Link/constants'
import { LinkProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { LINK_CHANGELOG } from './changelog'
import { LINK_EXAMPLES } from './examples'

export const LINK_META = {
  Link: {
    overview: {
      bundle: 'core',
      title: 'Wrapper that makes components navigable.',
      description:
        "Link makes its child navigable while ensuring valid and accessible HTML. In 'merge' mode (the default), it replaces the child's own underlying tag with <a> and merges its attributes in, avoiding invalid nested interactive elements. In 'wrap' mode, it wraps its content with a separate anchor element instead. When an onClick handler is provided, Link automatically prevents the browser's default navigation behavior, allowing you to handle routing or custom logic manually.",
      features: [
        'makes any wrapped content navigable via a single API',
        'merge mode avoids invalid nested interactive elements by taking over the child tag',
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
      composeMode: {
        options: LINK_COMPOSE_MODES,
        defaultValue: DEFAULT_LINK_COMPOSE_MODE,
        description:
          "Controls how Link composes with its child. 'merge' takes over the child's own tag (becoming <a> itself, merging href/target/onClick into it). 'wrap' renders a separate <a> around the child instead.",
      },
      href: {
        options: ['string'],
        isRequired: true,
        description: 'Destination URL.',
      },
      onClick: {
        options: ['e => void'],
        description:
          'Callback fired when the component is clicked. Automatically prevents default navigation when provided.',
      },
      target: {
        options: LINK_TARGETS,
        defaultValue: DEFAULT_LINK_TARGET,
        description:
          'Specifies where to open the linked document, following the standard HTML target attribute behavior.',
      },
    },
    changelog: LINK_CHANGELOG,
  } satisfies ComponentMeta<LinkProps>,
}
