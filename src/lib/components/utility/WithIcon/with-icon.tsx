import { WITH_ICON_DEFAULT_ICON_POSITION } from 'lib/definitions'
import { NativeElem, SvgIcon, WithIconProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import './with-icon.scss'

export const WithIcon = ({
  children,
  iconName,
  iconPosition = WITH_ICON_DEFAULT_ICON_POSITION,
}: WithIconProps) => {
  if (!iconName) {
    return children
  }

  return (
    <NativeElem elem="span" elemProps={{ className: withPrefix('with-icon') }}>
      {iconPosition === 'left' ? <SvgIcon name={iconName} /> : null}
      {children}
      {iconPosition === 'right' ? <SvgIcon name={iconName} /> : null}
    </NativeElem>
  )
}
