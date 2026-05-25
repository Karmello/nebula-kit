import { Children, cloneElement, MouseEvent } from 'react'
import classNames from 'classnames'

import { HtmlTag, HtmlTagProps } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_LINK_TARGET, LinkProps } from './definitions'

import './link.scss'

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

  const displayName = finalChildren?.type?.displayName

  if (['Button', 'Text'].includes(displayName)) {
    return cloneElement<HtmlTagProps<'a'>>(finalChildren, {
      ...finalChildren.props,
      tag: 'a',
      tagAttrs: {
        ...finalChildren.props.tagAttrs,
        className: classNames(withPrefix('link'), finalChildren.props.tagAttrs?.className),
        href,
        target,
        onClick: finalOnClick,
      },
    })
  } else {
    return (
      <HtmlTag
        tag="a"
        tagAttrs={{
          className: withPrefix('link'),
          href,
          target,
          onClick: finalOnClick,
        }}
      >
        {children}
      </HtmlTag>
    )
  }
}

Link.displayName = 'Link'
