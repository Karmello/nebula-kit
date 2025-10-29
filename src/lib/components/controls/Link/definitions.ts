import { MouseEventHandler } from 'react'

import { HtmlTagProps } from 'lib/components/base'

export const LINK_TARGETS = ['_self', '_blank', '_parent', '_top'] as const
export const DEFAULT_LINK_TARGET: LinkProps['target'] = '_self'

export type LinkTarget = (typeof LINK_TARGETS)[number]

type LinkOwnProps = {
  href: string
  target?: LinkTarget
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

type PropsFromHtmlTag = {
  children: HtmlTagProps<'a'>['children']
}

export type LinkProps = PropsFromHtmlTag & LinkOwnProps
