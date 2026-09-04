export const LINK_TARGETS = ['_self', '_blank', '_parent', '_top'] as const
export const DEFAULT_LINK_TARGET: (typeof LINK_TARGETS)[number] = '_self'

export const LINK_COMPOSE_MODES = ['wrap', 'merge'] as const
export const DEFAULT_LINK_COMPOSE_MODE: (typeof LINK_COMPOSE_MODES)[number] = 'merge'
