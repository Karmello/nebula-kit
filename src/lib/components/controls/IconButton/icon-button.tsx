import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { IconButtonProps } from './definitions'

import './icon-button.scss'

export const IconButton = ({
  elemProps,
  elemRef,
  size,
  variant,
  intent,
  disabled,
  iconName,
}: IconButtonProps) => {
  return (
    <Button
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('icon-btn'), elemProps?.className || ''),
      }}
      elemRef={elemRef}
      size={size}
      variant={variant}
      intent={intent}
      disabled={disabled}
      iconName={iconName}
    >
      {''}
    </Button>
  )
}

IconButton.displayName = 'IconButton'
