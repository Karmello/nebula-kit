import classNames from 'classnames'

import { Button, ButtonElem } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { IconButtonProps } from './definitions'

import './icon-button.scss'

export const IconButton = <E extends ButtonElem = 'button'>({
  elem,
  elemProps,
  elemRef,
  size,
  variant,
  intent,
  disabled,
  iconName,
}: IconButtonProps<E>) => {
  return (
    <Button
      elem={elem || 'button'}
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
