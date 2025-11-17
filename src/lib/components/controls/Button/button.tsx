import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Text, WithIcon, Loader } from 'lib/components'
import { Ripple } from 'lib/components/internal'
import { applyRespValues } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { useNebkitStore } from 'lib/state'

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
  color,
  intent = DEFAULT_BUTTON_INTENT,
  hoveredByDefault,
  disabled,
  // Text
  iconName,
  iconPosition,
  justifyContent = DEFAULT_BUTTON_JUSTIFY_CONTENT,
  bold,
  // WithIcon
  iconAngle,
  // own
  size = DEFAULT_BUTTON_SIZE,
  fullWidth,
  loading,
}: ButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()
  const { brand } = useNebkitStore()

  useLayoutEffect(() => {
    applyRespValues('dataset', tagRef || ref, bp, { fullWidth }, 'Btn')
  }, [bp, fullWidth])

  const text = (
    <Text tag="span" scale={BUTTON_SIZE_CONFIG[size].textScale} bold={bold}>
      {children}
    </Text>
  )

  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(
            withPrefix('btn'),
            children === undefined ? withPrefix('btn-square') : undefined,
            tagAttrs?.className
          ),
          type: tagAttrs?.type || 'button',
          style: { ...tagAttrs?.style, justifyContent, pointerEvents: loading ? 'none' : undefined },
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
      variant={variant}
      color={color || brand}
      intent={intent}
      hoveredByDefault={hoveredByDefault}
      disabled={disabled || loading}
      interactive
      position="relative"
      {...BUTTON_SIZE_CONFIG[size]}
    >
      <Ripple parentRef={tagRef || ref} />
      {iconName ? (
        <WithIcon
          tagAttrs={{ style: { inlineSize: children !== undefined ? '100%' : undefined } }}
          name={iconName}
          position={iconPosition}
          columnGap={children === undefined ? 0 : undefined}
          justifyContent={justifyContent}
          size={BUTTON_SIZE_CONFIG[size].iconSize}
          iconAngle={iconAngle}
        >
          {text}
        </WithIcon>
      ) : (
        text
      )}
      {loading && !disabled ? <Loader centered size={size} /> : null}
    </Box>
  )
}

Button.displayName = 'Button'
