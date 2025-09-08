import classNames from 'classnames'

import { Box, Text } from 'lib/components'
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_INTENT, DEFAULT_BUTTON_VARIANT } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import { BUTTON_SIZE_CONFIG, ButtonProps } from './definitions'
import './button.scss'

export const Button = ({
  // own
  size = DEFAULT_BUTTON_SIZE,
  textIntent,
  // text
  textAlign,
  bold,
  iconName,
  iconPosition,
  // box
  children,
  elemProps,
  variant = DEFAULT_BUTTON_VARIANT,
  intent = DEFAULT_BUTTON_INTENT,
  ...boxProps
}: ButtonProps) => {
  return (
    <Box
      elem="button"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('btn'), elemProps?.className),
        type: elemProps?.type || 'button',
      }}
      variant={variant}
      intent={intent}
      interactive
      {...BUTTON_SIZE_CONFIG[size]}
      {...boxProps}
    >
      <Text
        elem="span"
        intent={textIntent}
        textAlign={textAlign}
        bold={bold}
        iconName={iconName}
        iconPosition={iconPosition}
      >
        {children}
      </Text>
    </Box>
  )
}

Button.displayName = 'Button'
