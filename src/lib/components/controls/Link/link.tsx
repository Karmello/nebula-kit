import { Children, cloneElement, MouseEvent } from 'react'

import { HtmlTagProps } from 'lib/components'

import { DEFAULT_LINK_TARGET, LinkProps } from './definitions'

export const Link = ({
  // HtmlTag
  children,
  // own
  href,
  target = DEFAULT_LINK_TARGET,
  onClick,
}: LinkProps) => {
  const finalOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault()
      onClick(e)
    }
  }

  const finalChildren = Children.toArray(children)[0] as any

  return cloneElement<HtmlTagProps<'a'>>(finalChildren, {
    ...finalChildren.props,
    tag: 'a',
    tagAttrs: {
      ...finalChildren.props.tagAttrs,
      href,
      target,
      onClick: finalOnClick,
    },
  })
}

Link.displayName = 'Link'
