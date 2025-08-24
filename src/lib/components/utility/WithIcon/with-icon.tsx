import { ReactNode } from 'react'

import { SvgIcon } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { IconName } from 'lib/icons'

import './with-icon.scss'

export type WithIconProps = {
  children: ReactNode
  iconName?: IconName
  iconPosition?: 'left' | 'right'
}

export const WithIcon = ({ children, iconName, iconPosition = 'left' }: WithIconProps) => {
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
