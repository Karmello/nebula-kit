import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

import { HtmlTagProps } from './types'

import './html-tag.scss'

export const HtmlTag = <T extends ElementType = 'div'>({
  children,
  tag,
  tagAttrs,
  tagRef,
  className,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
}: HtmlTagProps<T>) => {
  const Tag = (tag ?? 'div') as any

  return (
    <Tag
      {...tagAttrs}
      ref={tagRef}
      className={classNames(withPrefix('html-tag'), className ?? tagAttrs?.className)}
      onClick={onClick ?? tagAttrs?.onClick}
      onFocus={onFocus ?? tagAttrs?.onFocus}
      onBlur={onBlur ?? tagAttrs?.onBlur}
      onKeyDown={onKeyDown ?? tagAttrs?.onKeyDown}
    >
      {children}
    </Tag>
  )
}

HtmlTag.displayName = 'HtmlTag'
