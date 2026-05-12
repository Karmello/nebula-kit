import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Text, Loader } from 'lib/components'
import { Ripple } from 'lib/components/core/internal'
import { updateDomRespDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { CONTROL_SIZE_TOKENS } from 'lib/definitions'

import {
  ButtonTag,
  ButtonProps,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_INTERACTIVE,
  DEFAULT_BUTTON_TEXT_ALIGN,
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
  interactive = DEFAULT_BUTTON_INTERACTIVE,
  disabled,
  elevated,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  // Text
  bold,
  iconName,
  iconPlacement,
  iconAngle,
  customSvgIcon,
  justifyContent = DEFAULT_BUTTON_JUSTIFY_CONTENT,
  textAlign = DEFAULT_BUTTON_TEXT_ALIGN,
  // own
  size = DEFAULT_BUTTON_SIZE,
  fullWidth,
  loading,
  ripple = DEFAULT_BUTTON_RIPPLE,
  selected,
  onClick,
}: ButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespDataset('Button', tagRef || ref, bp, { fullWidth })
  }, [bp, fullWidth])

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
          style: { ...tagAttrs?.style, pointerEvents: loading ? 'none' : undefined },
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
      elevated={elevated}
      surface={selected ? 'selected' : undefined}
      position="relative"
      blockSize={CONTROL_SIZE_TOKENS[size || 'md'].blockSize}
      paddingInline={CONTROL_SIZE_TOKENS[size || 'md'].paddingInline}
    >
      <Text
        tag="span"
        tagAttrs={{ style: { inlineSize: '100%' } }}
        fontSize={CONTROL_SIZE_TOKENS[size || 'md'].fontSize}
        lineHeight={CONTROL_SIZE_TOKENS[size || 'md'].lineHeight}
        bold={bold}
        truncate
        iconName={iconName}
        iconPlacement={iconPlacement}
        iconAngle={iconAngle}
        customSvgIcon={customSvgIcon}
        justifyContent={justifyContent}
        textAlign={textAlign}
      >
        {children}
      </Text>
      {loading && !disabled ? <Loader centered size={CONTROL_SIZE_TOKENS[size || 'md'].loaderSize} /> : null}
      <Ripple parentRef={tagRef || ref} active={ripple && !loading && !disabled} />
    </Box>
  )
}

Button.displayName = 'Button'
