import classNames from 'classnames'

import { Button, ButtonProps, WithIconOwnProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import './icon-button.scss'

export type IconButtonProps = Omit<ButtonProps, 'children' | 'iconName' | 'iconPosition'> & {
  iconName: WithIconOwnProps['iconName']
}

export const IconButton = ({ elemProps, ...rest }: IconButtonProps) => {
  return (
    <Button
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('icon-btn'), elemProps?.className),
      }}
      {...rest}
    />
  )
}

IconButton.displayName = 'IconButton'
