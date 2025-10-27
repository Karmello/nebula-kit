import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Text, WithIcon } from 'lib/components'
import { applyRespValues } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import {
  BUTTON_SIZE_CONFIG,
  ButtonTag,
  ButtonProps,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_BUTTON_JUSTIFY_CONTENT,
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
  labelIntent,
  justifyContent = DEFAULT_BUTTON_JUSTIFY_CONTENT,
  // own
  size = DEFAULT_BUTTON_SIZE,
  fullWidth,
}: ButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues('dataset', tagRef || ref, bp, { fullWidth }, 'Btn')
  }, [bp, fullWidth])

  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('btn'), tagAttrs?.className),
          type: tagAttrs?.type || 'button',
          style: { ...tagAttrs?.style, justifyContent },
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
      variant={variant}
      intent={intent}
      disabled={disabled}
      interactive
      {...BUTTON_SIZE_CONFIG[size]}
    >
      {iconName ? (
        <WithIcon
          tagAttrs={{ style: { inlineSize: children !== null ? '100%' : undefined } }}
          name={iconName}
          position={iconPosition}
          columnGap={children === null ? 0 : undefined}
          justifyContent={justifyContent}
        >
          <Text tag="span" intent={labelIntent}>
            {children}
          </Text>
        </WithIcon>
      ) : (
        <Text tag="span" intent={labelIntent}>
          {children}
        </Text>
      )}
    </Box>
  )
}

Button.displayName = 'Button'
