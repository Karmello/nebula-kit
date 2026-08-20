import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { Box, Flex, Icon, Loader, Text } from 'lib/index.core'
import { syncRespDataset } from 'lib/internals/dom'
import type { ButtonTag } from 'lib/types'

import {
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_ICON_PLACEMENT,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_SCALE,
  DEFAULT_BUTTON_VARIANT,
} from './constants'
import type { ButtonProps } from './types'

import './button.scss'

export const Button = <T extends ButtonTag = 'button'>({
  // own
  scale = DEFAULT_BUTTON_SCALE,
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
    <Icon name={iconName} size={CONTROL_SCALE_MAP[scale || 'md'].fontSize}>
      {customSvgIcon}
    </Icon>
  )

  return (
    <Box
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
      blockSize={CONTROL_SCALE_MAP[scale || 'md'].blockSize}
      paddingInline={CONTROL_SCALE_MAP[scale || 'md'].paddingInline}
      ripple={ripple}
      interactive
      cursor="pointer"
      position="relative"
    >
      <Flex
        tag="span"
        tagAttrs={{
          style: { inlineSize: '100%' },
        }}
        alignItems="center"
        columnGap={CONTROL_SCALE_MAP[scale || 'md'].gap}
        justifyContent={align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'}
      >
        {iconPlacement === 'left' ? icon : null}
        <Text
          tag="span"
          fontSize={CONTROL_SCALE_MAP[scale || 'md'].fontSize}
          lineHeight={CONTROL_SCALE_MAP[scale || 'md'].lineHeight}
          bold={bold}
          textAlign={align === 'center' ? 'center' : undefined}
          truncate
        >
          {children}
        </Text>
        {iconPlacement === 'right' ? icon : null}
        {loading && !disabled ? <Loader size={CONTROL_SCALE_MAP[scale || 'md'].fontSize} centered /> : null}
      </Flex>
    </Box>
  )
}

Button.displayName = 'Button'
