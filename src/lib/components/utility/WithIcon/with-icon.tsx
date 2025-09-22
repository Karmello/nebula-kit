import classNames from 'classnames'

import { HtmlTag, Icon } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_WITH_ICON_ICON_POSITION, WithIconProps } from './definitions'
import './with-icon.scss'

export const WithIcon = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // SvgIcon
  name,
  size,
  // own
  position = DEFAULT_WITH_ICON_ICON_POSITION,
}: WithIconProps) => {
  return (
    <HtmlTag
      tag="span"
      tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('with-icon'), tagAttrs?.className || '') }}
      tagRef={tagRef}
    >
      {position === 'left' ? <Icon name={name} size={size} /> : null}
      {children}
      {position === 'right' ? <Icon name={name} size={size} /> : null}
    </HtmlTag>
  )
}

WithIcon.displayName = 'WithIcon'
