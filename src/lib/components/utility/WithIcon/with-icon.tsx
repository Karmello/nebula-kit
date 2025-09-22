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
  iconName,
  iconSize,
  // own
  iconPosition = DEFAULT_WITH_ICON_ICON_POSITION,
}: WithIconProps) => {
  return (
    <HtmlTag
      tag="span"
      tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('with-icon'), tagAttrs?.className || '') }}
      tagRef={tagRef}
    >
      {iconPosition === 'left' ? <Icon iconName={iconName} iconSize={iconSize} /> : null}
      {children}
      {iconPosition === 'right' ? <Icon iconName={iconName} iconSize={iconSize} /> : null}
    </HtmlTag>
  )
}

WithIcon.displayName = 'WithIcon'
