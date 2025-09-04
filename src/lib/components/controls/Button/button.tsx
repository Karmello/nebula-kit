import classNames from 'classnames'

import {
  Box,
  BoxOwnProps,
  BoxProps,
  Text,
  TextOwnProps,
  TextProps,
  WithIcon,
  WithIconOwnProps,
} from 'lib/components'

import {
  ButtonSize,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  ScaleValue,
} from 'lib/definitions'

import { withPrefix } from 'lib/helpers'

import './button.scss'

export type ButtonOwnProps = {
  variant?: BoxOwnProps['variant']
  intent?: BoxOwnProps['intent']
  textIntent?: TextProps<'span'>['intent']
  size?: ButtonSize
  borderRadius?: BoxOwnProps['borderRadius']
  bold?: TextOwnProps['bold']
  disabled?: BoxOwnProps['disabled']
  iconName?: WithIconOwnProps['iconName']
  iconPosition?: WithIconOwnProps['iconPosition']
}

export type ButtonProps = Pick<BoxProps<'button'>, 'children' | 'elemProps' | 'elemRef'> & ButtonOwnProps

export const BUTTON_SIZE_TO_PROPS: Record<
  ButtonSize,
  {
    blockSize: ScaleValue
    paddingLeft: ScaleValue
    paddingRight: ScaleValue
    fontSize: ScaleValue
  }
> = {
  sm: { blockSize: 19, paddingLeft: 6, paddingRight: 6, fontSize: 7 },
  md: { blockSize: 22, paddingLeft: 8, paddingRight: 8, fontSize: 8 },
  lg: { blockSize: 26, paddingLeft: 12, paddingRight: 12, fontSize: 9 },
}

export const Button = ({
  children,
  elemProps,
  elemRef,
  variant = DEFAULT_BUTTON_VARIANT,
  intent = DEFAULT_BUTTON_INTENT,
  textIntent,
  size = DEFAULT_BUTTON_SIZE,
  borderRadius,
  bold,
  disabled,
  iconName,
  iconPosition,
}: ButtonProps) => {
  return (
    <Box
      elem="button"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('btn'), elemProps?.className),
        type: elemProps?.type || 'button',
      }}
      elemRef={elemRef}
      variant={variant}
      intent={intent}
      borderRadius={borderRadius}
      disabled={disabled}
      interactive
      {...BUTTON_SIZE_TO_PROPS[size]}
    >
      <WithIcon iconName={iconName} iconPosition={iconPosition}>
        {children ? (
          <Text elem="span" intent={textIntent} bold={bold}>
            {children}
          </Text>
        ) : null}
      </WithIcon>
    </Box>
  )
}

Button.displayName = 'Button'
