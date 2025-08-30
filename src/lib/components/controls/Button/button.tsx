import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import {
  Box,
  BoxOwnProps,
  Text,
  TEXT_DEFAULT_INTENT,
  TextOwnProps,
  WithIcon,
  WithIconOwnProps,
} from 'lib/components'

import { withPrefix } from 'lib/helpers'
import { BoxIntent, BoxVariant, ButtonSize, ScaleValue } from 'lib/definitions'

export type ButtonOwnProps = {
  variant?: BoxOwnProps['variant']
  intent?: BoxOwnProps['intent']
  textIntent?: TextOwnProps['intent']
  size?: `${ButtonSize}`
  borderRadius?: BoxOwnProps['borderRadius']
  disabled?: BoxOwnProps['disabled']
  iconName?: WithIconOwnProps['iconName']
  iconPosition?: WithIconOwnProps['iconPosition']
}

export type ButtonProps = ComponentPropsWithRef<'button'> & ButtonOwnProps

export const BUTTON_SIZE_TO_PROPS: Record<
  ButtonSize,
  {
    blockSize: ScaleValue
    pl: ScaleValue
    pr: ScaleValue
    fontSize: ScaleValue
  }
> = {
  sm: { blockSize: 19, pl: 6, pr: 6, fontSize: 7 },
  md: { blockSize: 22, pl: 8, pr: 8, fontSize: 8 },
  lg: { blockSize: 26, pl: 12, pr: 12, fontSize: 9 },
}

export const BUTTON_DEFAULT_VARIANT: `${BoxVariant}` = 'solid'
export const BUTTON_DEFAULT_INTENT: `${BoxIntent}` = 'tertiary'
export const BUTTON_DEFAULT_SIZE: `${ButtonSize}` = 'md'

export const Button = ({
  children,
  className,
  type = 'button',
  variant = BUTTON_DEFAULT_VARIANT,
  intent = BUTTON_DEFAULT_INTENT,
  textIntent = TEXT_DEFAULT_INTENT,
  size = BUTTON_DEFAULT_SIZE,
  disabled = false,
  iconName,
  iconPosition,
  ...rest
}: ButtonProps) => {
  return (
    <Box
      type={type}
      {...rest}
      className={classNames(withPrefix('btn'), className)}
      as="button"
      variant={variant}
      intent={intent}
      disabled={disabled}
      interactive
      overflowX="hidden"
      style={{
        fontFamily: 'inherit',
        lineHeight: 1,
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        ...rest.style,
      }}
      {...BUTTON_SIZE_TO_PROPS[size]}
    >
      <WithIcon iconName={iconName} iconPosition={iconPosition}>
        {children ? (
          <Text intent={textIntent} bold>
            {children}
          </Text>
        ) : null}
      </WithIcon>
    </Box>
  )
}

Button.displayName = 'Button'
