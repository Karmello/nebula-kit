import { MouseEventHandler } from 'react'

import { HtmlTagProps } from 'lib/index.core'

import { LINK_COMPOSE_MODES, LINK_TARGETS } from './constants'

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
