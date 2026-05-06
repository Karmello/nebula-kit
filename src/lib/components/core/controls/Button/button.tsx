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
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_INTERACTIVE,
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
  interactive = DEFAULT_BUTTON_INTERACTIVE,
  selected,
  disabled,
  surface,
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
  ripple = DEFAULT_BUTTON_RIPPLE,
  onClick,
}: ButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespDataset('Button', tagRef || ref, bp, { fullWidth })
  }, [bp, fullWidth])

  const text = (
    <Text
      tag="span"
      fontSize={BUTTON_SIZE_CONFIG[size || 'md'].fontSize}
      lineHeight={BUTTON_SIZE_CONFIG[size || 'md'].lineHeight}
      bold={bold}
      truncate
    >
      {children}
    </Text>
  )

  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          onClick,
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
      disabled={disabled || loading}
      inlineSize={inlineSize}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      interactive={interactive}
      selected={selected}
      surface={surface}
      position="relative"
      blockSize={BUTTON_SIZE_CONFIG[size || 'md'].blockSize}
      padding={BUTTON_SIZE_CONFIG[size || 'md'].padding}
    >
      {iconName ? (
        <WithIcon
          inlineSize={children !== undefined ? '100%' : undefined}
          iconName={iconName}
          iconPlacement={iconPlacement}
          iconSize={BUTTON_SIZE_CONFIG[size || 'md'].iconSize}
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
      {loading && !disabled ? (
        <Loader
          tagAttrs={{
            style: {
              blockSize: BUTTON_SIZE_CONFIG[size || 'md'].loaderSize,
              inlineSize: BUTTON_SIZE_CONFIG[size || 'md'].loaderSize,
            },
          }}
          centered
        />
      ) : null}
      <Ripple parentRef={tagRef || ref} active={ripple && !loading && !disabled} />
    </Box>
  )
}

Button.displayName = 'Button'
