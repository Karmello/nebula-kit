import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box, Text } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  BUTTON_SIZE_CONFIG,
  ButtonElem,
  ButtonProps,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from './definitions'

import './button.scss'

export const Button = <E extends ButtonElem = 'button'>({
  // own
  size = DEFAULT_BUTTON_SIZE,
  // text
  iconName,
  iconPosition,
  // box
  children,
  elem,
  elemProps,
  elemRef,
  variant = DEFAULT_BUTTON_VARIANT,
  intent = DEFAULT_BUTTON_INTENT,
  disabled,
}: ButtonProps<E>) => {
  return (
    <Box
      elem={elem || 'button'}
      elemProps={
        {
          ...elemProps,
          className: classNames(withPrefix('btn'), elemProps?.className),
          type: elemProps?.type || 'button',
        } as PropsWithoutRef<ComponentProps<E>>
      }
      elemRef={elemRef}
      variant={variant}
      intent={intent}
      disabled={disabled}
      interactive
      {...BUTTON_SIZE_CONFIG[size]}
    >
      <Text elem="span" iconName={iconName} iconPosition={iconPosition}>
        {children}
      </Text>
    </Box>
  )
}

Button.displayName = 'Button'
