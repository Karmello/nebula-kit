import { ButtonHTMLAttributes, Ref } from 'react'
import classNames from 'classnames'

import { Button, ButtonOwnProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type IconButtonOwnProps = {
  /** Icon name to render inside the button */
  iconName: ButtonOwnProps['iconName']
  /** Visual style variant of the button (e.g. solid, outline, ghost) */
  variant?: ButtonOwnProps['variant']
  /** Semantic intent for coloring (e.g. primary, success, danger, neutral) */
  intent?: ButtonOwnProps['intent']
  /** Disables interaction and applies disabled styling */
  disabled?: ButtonOwnProps['disabled']
  /** Button size controlling height and font size */
  size?: ButtonOwnProps['size']
}

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> &
  IconButtonOwnProps & {
    ref?: Ref<any>
  }

/** IconButton is a specialized button for icon-only actions. It inherits all button styling (variants, intents, sizes, disabled state) but omits children, always rendering a single icon centered within a square button. */
export const IconButton = ({
  ref,
  className,
  iconName,
  variant = 'solid',
  intent = 'neutral',
  disabled = false,
  size = 'md',
  ...rest
}: IconButtonProps) => {
  return (
    <Button
      ref={ref}
      className={classNames(withPrefix('icon-btn'), className)}
      iconName={iconName}
      variant={variant}
      intent={intent}
      disabled={disabled}
      size={size}
      {...rest}
    />
  )
}

IconButton.displayName = 'IconButton'
