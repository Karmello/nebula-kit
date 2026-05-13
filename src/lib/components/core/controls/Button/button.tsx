import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Text, Loader, WithIcon } from 'lib/components'
import { Ripple } from 'lib/components/core/internal'
import { updateDomRespDataset } from 'lib/service'
import { CONTROL_SIZE_MAP } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import {
  ButtonTag,
  ButtonProps,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_INTERACTIVE,
  DEFAULT_BUTTON_ALIGN,
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
  // WithIcon
  customSvgIcon,
  iconAngle,
  iconPlacement,
  // own
  size = DEFAULT_BUTTON_SIZE,
  fullWidth,
  align = DEFAULT_BUTTON_ALIGN,
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
      blockSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
      paddingInline={CONTROL_SIZE_MAP[size || 'md'].paddingInline}
    >
      <WithIcon
        tagAttrs={{ style: { inlineSize: '100%' } }}
        iconName={iconName}
        iconPlacement={iconPlacement}
        iconAngle={iconAngle}
        customSvgIcon={customSvgIcon}
        justifyContent={align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'}
      >
        {children ? (
          <Text
            tag="span"
            fontSize={CONTROL_SIZE_MAP[size || 'md'].fontSize}
            lineHeight={CONTROL_SIZE_MAP[size || 'md'].lineHeight}
            bold={bold}
            truncate
            textAlign={align === 'center' ? 'center' : undefined}
          >
            {children}
          </Text>
        ) : null}
      </WithIcon>
      {loading && !disabled ? <Loader centered size={CONTROL_SIZE_MAP[size || 'md'].loaderSize} /> : null}
      <Ripple parentRef={tagRef || ref} active={ripple && !loading && !disabled} />
    </Box>
  )
}

Button.displayName = 'Button'
