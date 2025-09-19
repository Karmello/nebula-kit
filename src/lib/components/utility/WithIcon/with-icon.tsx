import classNames from 'classnames'

import { NativeElem, SvgIcon } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_WITH_ICON_ICON_POSITION, WithIconProps } from './definitions'
import './with-icon.scss'

export const WithIcon = ({
  // own
  iconPosition = DEFAULT_WITH_ICON_ICON_POSITION,
  // NativeElem
  children,
  elemProps,
  // SvgIcon
  iconName,
  iconSize,
}: WithIconProps) => {
  return (
    <NativeElem
      elem="span"
      elemProps={{ ...elemProps, className: classNames(withPrefix('with-icon'), elemProps?.className || '') }}
    >
      {iconPosition === 'left' ? <SvgIcon iconName={iconName} iconSize={iconSize} /> : null}
      {children}
      {iconPosition === 'right' ? <SvgIcon iconName={iconName} iconSize={iconSize} /> : null}
    </NativeElem>
  )
}

WithIcon.displayName = 'WithIcon'
