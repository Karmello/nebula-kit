import { type LinkProps } from 'lib/index.core'

export const LINK_TARGETS = ['_self', '_blank', '_parent', '_top'] as const
export const DEFAULT_LINK_TARGET: LinkProps['target'] = '_self'

export const LINK_COMPOSE_MODES = ['wrap', 'merge'] as const
export const DEFAULT_LINK_COMPOSE_MODE: LinkProps['composeMode'] = 'merge'
