import classNames from 'classnames'

import { WITH_ICON_DEFAULT_ICON_POSITION } from 'lib/definitions'
import { NativeElem, SvgIcon, WithIconProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import './with-icon.scss'

export const WithIcon = ({
  // own
  iconPosition = WITH_ICON_DEFAULT_ICON_POSITION,
  // NativeElem
  children,
  elemProps,
  // SvgIcon
  iconName,
}: WithIconProps) => {
  return (
    <NativeElem
      elem="span"
      elemProps={{ ...elemProps, className: classNames(withPrefix('with-icon'), elemProps?.className || '') }}
    >
      {iconPosition === 'left' ? <SvgIcon iconName={iconName} /> : null}
      {children}
      {iconPosition === 'right' ? <SvgIcon iconName={iconName} /> : null}
    </NativeElem>
  )
}
