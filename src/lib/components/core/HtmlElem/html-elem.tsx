import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

import { HtmlElemProps } from './types'

import './html-elem.scss'

export const HtmlElem = <T extends ElementType = 'div'>({
  children,
  elemTag,
  elemAttrs,
  elemRef,
  className,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
}: HtmlElemProps<T>) => {
  const Tag = (elemTag ?? 'div') as any

  return (
    <Tag
      {...elemAttrs}
      ref={elemRef}
      className={classNames(withPrefix('html-elem'), className ?? elemAttrs?.className)}
      onClick={onClick ?? elemAttrs?.onClick}
      onFocus={onFocus ?? elemAttrs?.onFocus}
      onBlur={onBlur ?? elemAttrs?.onBlur}
      onKeyDown={onKeyDown ?? elemAttrs?.onKeyDown}
    >
      {children}
    </Tag>
  )
}

HtmlElem.displayName = 'HtmlElem'
