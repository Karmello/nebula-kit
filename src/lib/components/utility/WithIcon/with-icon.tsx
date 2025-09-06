import { ReactNode } from 'react'

import { IconPosition, WITH_ICON_DEFAULT_ICON_POSITION } from 'lib/definitions'
import { SvgIcon } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { IconName } from 'lib/icons'

import './with-icon.scss'

export type WithIconProps = {
  children: ReactNode
  iconName?: IconName
  iconPosition?: `${IconPosition}`
}

export const WithIcon = ({
  children,
  iconName,
  iconPosition = WITH_ICON_DEFAULT_ICON_POSITION,
}: WithIconProps) => {
  if (!iconName) {
    return children
  }

  return (
    <span className={withPrefix('with-icon')}>
      {iconPosition === 'left' ? <SvgIcon name={iconName} /> : null}
      {children}
      {iconPosition === 'right' ? <SvgIcon name={iconName} /> : null}
    </span>
  )
}
