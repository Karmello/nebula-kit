import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box, Text } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  BUTTON_SIZE_CONFIG,
  ButtonTag,
  ButtonProps,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from './definitions'

import './button.scss'

export const Button = <T extends ButtonTag = 'button'>({
  // HtmlTag
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  children,
  // Box
  variant = DEFAULT_BUTTON_VARIANT,
  intent = DEFAULT_BUTTON_INTENT,
  disabled,
  // Text
  iconName,
  iconPosition,
  textIntent,
  // own
  size = DEFAULT_BUTTON_SIZE,
}: ButtonProps<T>) => {
  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('btn'), tagAttrs?.className),
          type: tagAttrs?.type || 'button',
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef}
      variant={variant}
      intent={intent}
      disabled={disabled}
      interactive
      {...BUTTON_SIZE_CONFIG[size]}
    >
      <Text tag="span" iconName={iconName} iconPosition={iconPosition} intent={textIntent}>
        {children}
      </Text>
    </Box>
  )
}

Button.displayName = 'Button'
