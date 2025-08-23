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

const SIZE_TO_PROPS: Record<
  ButtonSize,
  {
    height: BoxOwnProps['height']
    pl: BoxOwnProps['pl']
    pr: BoxOwnProps['pr']
    fontSize: BoxOwnProps['fontSize']
  }
> = {
  sm: { height: 19, pl: 6, pr: 6, fontSize: 7 },
  md: { height: 22, pl: 8, pr: 8, fontSize: 8 },
  lg: { height: 26, pl: 12, pr: 12, fontSize: 9 },
}

/** Button is a polymorphic action component built on Box. It supports variants, intents, and sizes, with optional icons on either side. Padding and height adjust automatically per size, and when no children are provided it renders as a square icon-only button. */
export const Button = ({
  ref,
  type = 'button',
  className,
  variant = 'solid',
  intent = 'neutral',
  disabled = false,
  size = 'md',
  iconName,
  iconPosition,
  children,
  ...rest
}: ButtonProps) => {
  const isSquare = !children

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
      {...SIZE_TO_PROPS[size]}
      pl={isSquare ? 0 : SIZE_TO_PROPS[size].pl}
      pr={isSquare ? 0 : SIZE_TO_PROPS[size].pr}
      {...{
        'data-btn-square': isSquare,
      }}
    >
      <WithIcon iconName={iconName} iconPosition={iconPosition}>
        {children}
      </WithIcon>
    </Box>
  )
}

Button.displayName = 'Button'
