import { Children, cloneElement, isValidElement, MouseEvent } from 'react'
import classNames from 'classnames'

import { HtmlTag, HtmlTagProps } from 'lib/components/core/HtmlTag'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_LINK_COMPOSE_MODE, DEFAULT_LINK_TARGET } from './constants'
import { LinkProps } from './types'

import './link.scss'

export const Link = ({
  // HtmlTag
  children,
  // own
  href,
  target = DEFAULT_LINK_TARGET,
  onClick,
  composeMode = DEFAULT_LINK_COMPOSE_MODE,
}: LinkProps) => {
  const finalOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault()
      onClick(e)
    }
  }

  const finalChildren = Children.toArray(children)[0] as any

  if (composeMode === 'merge' && isValidElement(finalChildren)) {
    const element = finalChildren as any

    return cloneElement<HtmlTagProps<'a'>>(element, {
      ...element.props,
      tag: 'a',
      tagAttrs: {
        ...element.props.tagAttrs,
        className: classNames(withPrefix('link'), element.props.tagAttrs?.className),
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
