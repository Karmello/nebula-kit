import { ButtonHTMLAttributes, Ref } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, WithIcon, WithIconProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { Size } from 'lib/definitions'

import './button.scss'

export type ButtonSize = Extract<Size, 'sm' | 'md' | 'lg'>

export type ButtonOwnProps = {
  /** Visual style variant of the button (e.g. solid, outline, ghost) */
  variant?: BoxOwnProps['variant']
  /** Semantic intent for coloring (e.g. primary, success, danger, neutral) */
  intent?: BoxOwnProps['intent']
  /** Disables interaction and applies disabled styling */
  disabled?: BoxOwnProps['disabled']
} & {
  /** Button size controlling height, padding, and font size */
  size?: ButtonSize
  /** Optional icon name to render inside the button */
  iconName?: WithIconProps['iconName']
  /** Position of the icon relative to text (e.g. left or right) */
  iconPosition?: WithIconProps['iconPosition']
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonOwnProps & {
    ref?: Ref<any>
  }

export const BUTTON_SIZE_TO_PROPS: Record<
  ButtonSize,
  {
    blockSize: BoxOwnProps['blockSize']
    pl: BoxOwnProps['pl']
    pr: BoxOwnProps['pr']
    fontSize: BoxOwnProps['fontSize']
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
      {...BUTTON_SIZE_TO_PROPS[size]}
    >
      <WithIcon iconName={iconName} iconPosition={iconPosition}>
        {children}
      </WithIcon>
    </Box>
  )
}

Button.displayName = 'Button'
