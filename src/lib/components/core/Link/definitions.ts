import { MouseEventHandler } from 'react'

import { HtmlTagProps } from 'lib/index.core'

export const LINK_TARGETS = ['_self', '_blank', '_parent', '_top'] as const
export const DEFAULT_LINK_TARGET: LinkProps['target'] = '_self'

export const LINK_COMPOSE_MODES = ['wrap', 'merge'] as const
export const DEFAULT_LINK_COMPOSE_MODE: LinkProps['composeMode'] = 'merge'

export type LinkTarget = (typeof LINK_TARGETS)[number]
export type LinkComposeMode = (typeof LINK_COMPOSE_MODES)[number]

export type LinkProps = {
  // own
  href: string
  target?: LinkTarget
  onClick?: MouseEventHandler<HTMLAnchorElement>
  composeMode?: LinkComposeMode
  // HtmlTag
  children: HtmlTagProps<'a'>['children']
}
