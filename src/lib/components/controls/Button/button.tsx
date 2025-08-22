import { ButtonHTMLAttributes, Ref } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, WithIcon, WithIconProps } from 'lib/components'
import { withPrefix, getDataAttrs } from 'lib/helpers'
import { Size } from 'lib/definitions'

import './button.scss'

export type ButtonSize = Extract<Size, 'sm' | 'md' | 'lg'>

export type ButtonOwnProps = Pick<BoxOwnProps, 'variant' | 'intent' | 'disabled'> & {
  ref?: Ref<any>
  size?: ButtonSize
  iconName?: WithIconProps['iconName']
  iconPosition?: WithIconProps['iconPosition']
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonOwnProps

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

export const Button = ({
  ref,
  type = 'button',
  className,
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
