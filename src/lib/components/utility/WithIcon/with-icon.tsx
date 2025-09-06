import { WITH_ICON_DEFAULT_ICON_POSITION } from 'lib/definitions'
import { NativeElem, SvgIcon, WithIconProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import './with-icon.scss'

export const WithIcon = ({
  children,
  elemRef,
  iconName,
  iconPosition = WITH_ICON_DEFAULT_ICON_POSITION,
}: WithIconProps) => {
  if (!iconName) {
    return children
  }

  return (
    <NativeElem elem="span" elemProps={{ className: withPrefix('with-icon') }} elemRef={elemRef}>
      {iconPosition === 'left' ? <SvgIcon iconName={iconName} /> : null}
      {children}
      {iconPosition === 'right' ? <SvgIcon iconName={iconName} /> : null}
    </NativeElem>
  )
}
