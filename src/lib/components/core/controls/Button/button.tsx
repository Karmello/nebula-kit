import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Text, WithIcon, Loader } from 'lib/components'
import { Ripple } from 'lib/components/core/internal'
import { updateDomRespDataset } from 'lib/service'
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
  color,
  intent = DEFAULT_BUTTON_INTENT,
  highlighted,
  disabled,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  // Text
  iconName,
  iconPlacement,
  justifyContent = DEFAULT_BUTTON_JUSTIFY_CONTENT,
  bold,
  // WithIcon
  iconAngle,
  customSvgIcon,
  // own
  size = DEFAULT_BUTTON_SIZE,
  fullWidth,
  loading,
}: ButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespDataset('Button', tagRef || ref, bp, { fullWidth })
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
            withPrefix('button'),
            children === undefined ? withPrefix('button-square') : undefined,
            tagAttrs?.className
          ),
          type: tagAttrs?.type || 'button',
          'aria-disabled': disabled || undefined,
          style: { ...tagAttrs?.style, justifyContent, pointerEvents: loading ? 'none' : undefined },
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
      drawable
      variant={variant}
      color={color}
      intent={intent}
      highlighted={highlighted}
      disabled={disabled || loading}
      inlineSize={inlineSize}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      interactive
      position="relative"
      {...BUTTON_SIZE_CONFIG[size]}
    >
      <Ripple parentRef={tagRef || ref} />
      {iconName ? (
        <WithIcon
          inlineSize={children !== undefined ? '100%' : undefined}
          iconName={iconName}
          iconPlacement={iconPlacement}
          iconSize={BUTTON_SIZE_CONFIG[size].iconSize}
          iconAngle={iconAngle}
          justifyContent={justifyContent}
          gap={children === undefined ? '0px' : undefined}
          customSvgIcon={customSvgIcon}
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
