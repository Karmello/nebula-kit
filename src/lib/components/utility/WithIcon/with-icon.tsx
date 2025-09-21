import classNames from 'classnames'

import { HtmlTag, SvgIcon } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_WITH_ICON_ICON_POSITION, WithIconProps } from './definitions'
import './with-icon.scss'

export const WithIcon = ({
  // own
  iconPosition = DEFAULT_WITH_ICON_ICON_POSITION,
  // HtmlTag
  children,
  tagAttrs,
  // SvgIcon
  iconName,
  iconSize,
}: WithIconProps) => {
  return (
    <HtmlTag
      tag="span"
      tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('with-icon'), tagAttrs?.className || '') }}
    >
      {iconPosition === 'left' ? <SvgIcon iconName={iconName} iconSize={iconSize} /> : null}
      {children}
      {iconPosition === 'right' ? <SvgIcon iconName={iconName} iconSize={iconSize} /> : null}
    </HtmlTag>
  )
}

WithIcon.displayName = 'WithIcon'
