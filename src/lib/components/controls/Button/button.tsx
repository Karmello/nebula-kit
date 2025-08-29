import { ButtonHTMLAttributes, Ref } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, Text, TextOwnProps, WithIcon, WithIconOwnProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { ScaleValue, Size } from 'lib/definitions'

export type ButtonSize = Extract<Size, 'sm' | 'md' | 'lg'>

export type ButtonOwnProps = {
  /** Visual style variant of the button (e.g. solid, outline, ghost) */
  variant?: BoxOwnProps['variant']
  /** Semantic intent for coloring (e.g. primary, success, danger, neutral) */
  intent?: BoxOwnProps['intent']
  textIntent?: TextOwnProps['intent']
  /** Disables interaction and applies disabled styling */
  disabled?: BoxOwnProps['disabled']
  borderRadius?: BoxOwnProps['borderRadius']
} & {
  /** Button size controlling height, padding, and font size */
  size?: ButtonSize
  /** Optional icon name to render inside the button */
  iconName?: WithIconOwnProps['iconName']
  /** Position of the icon relative to text (e.g. left or right) */
  iconPosition?: WithIconOwnProps['iconPosition']
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonOwnProps & {
    ref?: Ref<any>
  }

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

/** Button is a polymorphic action component built on Box. It supports variants, intents, and sizes, with optional icons on either side. Padding and height adjust automatically per size. */
export const Button = ({
  ref,
  type = 'button',
  className,
  variant = 'solid',
  intent = 'tertiary',
  textIntent,
  disabled = false,
  size = 'md',
  iconName,
  iconPosition,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Box
      ref={ref}
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
