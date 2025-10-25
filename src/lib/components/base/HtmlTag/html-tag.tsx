import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

import { HtmlTagProps } from './definitions'

export const HtmlTag = <T extends ElementType = 'div'>({
  children,
  tag,
  tagAttrs,
  tagRef,
}: HtmlTagProps<T>) => {
  const Tag = (tag ?? 'div') as any

  return (
    <Tag {...tagAttrs} ref={tagRef} className={classNames(withPrefix('html-tag'), tagAttrs?.className)}>
      {children}
    </Tag>
  )
}

HtmlTag.displayName = 'HtmlTag'
