import { MouseEventHandler } from 'react'

import { HtmlElemProps } from 'lib/components/core/HtmlElem'

import { LINK_COMPOSE_MODES, LINK_TARGETS } from './constants'

export type LinkTarget = (typeof LINK_TARGETS)[number]
export type LinkComposeMode = (typeof LINK_COMPOSE_MODES)[number]

export type LinkProps = {
  // own
  href: string
  target?: LinkTarget
  onClick?: MouseEventHandler<HTMLAnchorElement>
  composeMode?: LinkComposeMode
  // HtmlElem
  children: HtmlElemProps<'a'>['children']
}
