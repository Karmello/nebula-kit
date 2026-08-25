import {
  DEFAULT_LINK_COMPOSE_MODE,
  DEFAULT_LINK_TARGET,
  LINK_COMPOSE_MODES,
  LINK_TARGETS,
} from 'lib/components/core/Link/constants'
import { LinkProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

export const LINK_PROPS: Record<keyof LinkProps, Prop> = {
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
}
