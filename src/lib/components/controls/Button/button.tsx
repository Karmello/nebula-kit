import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps, Text, TextOwnProps, WithIcon, WithIconOwnProps } from 'lib/components'
import { BoxIntent, BoxVariant, ButtonSize, ScaleValue } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import './button.scss'

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

export const BUTTON_DEFAULT_VARIANT: `${BoxVariant}` = 'solid'
export const BUTTON_DEFAULT_INTENT: `${BoxIntent}` = 'tertiary'
export const BUTTON_DEFAULT_SIZE: `${ButtonSize}` = 'md'

export const Button = ({
  children,
  elemProps,
  elemRef,
  variant = BUTTON_DEFAULT_VARIANT,
  intent = BUTTON_DEFAULT_INTENT,
  textIntent,
  size = BUTTON_DEFAULT_SIZE,
  borderRadius,
  disabled = false,
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
          <Text intent={textIntent} bold>
            {children}
          </Text>
        ) : null}
      </WithIcon>
    </Box>
  )
}

Button.displayName = 'Button'

// const Test = () => {
//   return <Button elemProps={{ type: 'submit' }}>button</Button>
// }
