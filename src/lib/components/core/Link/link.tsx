import { Children, cloneElement, isValidElement, MouseEvent } from 'react'
import classNames from 'classnames'

import { HtmlElem, HtmlElemProps } from 'lib/components/core/HtmlElem'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_LINK_COMPOSE_MODE, DEFAULT_LINK_TARGET } from './constants'
import { LinkProps } from './types'

import './link.scss'

export const Link = ({
  // HtmlElem
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

    return cloneElement<HtmlElemProps<'a'>>(element, {
      ...element.props,
      elemTag: 'a',
      elemAttrs: {
        ...element.props.elemAttrs,
        className: classNames(withPrefix('link'), element.props.elemAttrs?.className),
        href,
        target,
        onClick: finalOnClick,
      },
    })
  } else {
    return (
      <HtmlElem
        elemTag="a"
        className={withPrefix('link')}
        onClick={finalOnClick}
        elemAttrs={{
          href,
          target,
        }}
      >
        {children}
      </HtmlElem>
    )
  }
}

Link.displayName = 'Link'
