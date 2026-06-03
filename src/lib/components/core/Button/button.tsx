import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { ButtonProps, Flex, Icon, Loader, Text } from 'lib/index.core'
import { syncRespDataset } from 'lib/internals/dom'
import { ButtonTag } from 'lib/types'

import {
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_ICON_PLACEMENT,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_VARIANT,
} from './constants'

import './button.scss'

export const Button = <T extends ButtonTag = 'button'>({
  // own
  size = DEFAULT_CONTROL_SIZE,
  fullWidth,
  align = DEFAULT_BUTTON_ALIGN,
  loading,
  selected,
  onClick,
  iconPlacement = DEFAULT_BUTTON_ICON_PLACEMENT,
  // Flex
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  variant = DEFAULT_BUTTON_VARIANT,
  color,
  intent = DEFAULT_BUTTON_INTENT,
  disabled,
  elevated,
  ripple = DEFAULT_BUTTON_RIPPLE,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  // Text
  children,
  bold,
  // Icon
  iconName,
  customSvgIcon,
}: ButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespDataset('Button', finalRef, bp, { fullWidth })
  }, [bp, fullWidth])

  const icon = (
    <Icon name={iconName} size={CONTROL_SIZE_MAP[size || 'md'].iconSize}>
      {customSvgIcon}
    </Icon>
  )

  return (
    <Flex
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('button'), tagAttrs?.className),
          ...(tag === 'button' ? { type: (tagAttrs as ComponentProps<'button'> | undefined)?.type || 'button' } : {}),
          onClick: onClick || tagAttrs?.onClick,
          'aria-disabled': disabled || undefined,
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={finalRef}
      variant={variant}
      color={color}
      intent={intent}
      disabled={disabled || loading}
      inlineSize={inlineSize}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      elevated={elevated}
      surface={selected ? 'selected' : undefined}
      blockSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
      paddingInline={CONTROL_SIZE_MAP[size || 'md'].paddingInline}
      ripple={ripple}
      interactive
      cursor="pointer"
      position="relative"
      alignItems="center"
      columnGap={CONTROL_SIZE_MAP[size || 'md'].iconGap}
      justifyContent={align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'}
    >
      {iconPlacement === 'left' ? icon : null}
      <Text
        tag="span"
        fontSize={CONTROL_SIZE_MAP[size || 'md'].fontSize}
        lineHeight={CONTROL_SIZE_MAP[size || 'md'].lineHeight}
        bold={bold}
        textAlign={align === 'center' ? 'center' : undefined}
        truncate
      >
        {children}
      </Text>
      {iconPlacement === 'right' ? icon : null}
      {loading && !disabled ? <Loader centered size={CONTROL_SIZE_MAP[size || 'md'].loaderSize} /> : null}
    </Flex>
  )
}

Button.displayName = 'Button'
