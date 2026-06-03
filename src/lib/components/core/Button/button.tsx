import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { Box, ButtonProps, Flex, Loader, Text, WithIcon } from 'lib/index.core'
import { syncRespDataset } from 'lib/internals/dom'
import { ButtonTag } from 'lib/types'

import { DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_INTENT, DEFAULT_BUTTON_RIPPLE, DEFAULT_BUTTON_VARIANT } from './definitions'

import './button.scss'

export const Button = <T extends ButtonTag = 'button'>({
  // Box
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  children,
  variant = DEFAULT_BUTTON_VARIANT,
  color,
  intent = DEFAULT_BUTTON_INTENT,
  disabled,
  elevated,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  // Text
  bold,
  // WithIcon
  customSvgIcon,
  iconName,
  iconAngle,
  iconPlacement,
  // own
  size = DEFAULT_CONTROL_SIZE,
  fullWidth,
  align = DEFAULT_BUTTON_ALIGN,
  loading,
  ripple = DEFAULT_BUTTON_RIPPLE,
  selected,
  description,
  onClick,
}: ButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespDataset('Button', finalRef, bp, { fullWidth })
  }, [bp, fullWidth])

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
      blockSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
      paddingInline={CONTROL_SIZE_MAP[size || 'md'].paddingInline}
      ripple={ripple}
      interactive
      cursor="pointer"
      position="relative"
    >
      <WithIcon
        inlineSize="100%"
        iconName={iconName}
        iconPlacement={iconPlacement}
        iconSize={CONTROL_SIZE_MAP[size || 'md'].iconSize}
        iconAngle={iconAngle}
        customSvgIcon={customSvgIcon}
        justifyContent={align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'}
        gap={CONTROL_SIZE_MAP[size || 'md'].iconGap}
      >
        <Flex tag="span" tagAttrs={{ style: { minInlineSize: 0 } }} flexDirection="column">
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
          {description && size === 'xl' ? (
            <Text tag="span" typography="small" textAlign={align === 'center' ? 'center' : undefined} truncate>
              {description}
            </Text>
          ) : null}
        </Flex>
      </WithIcon>
      {loading && !disabled ? <Loader centered size={CONTROL_SIZE_MAP[size || 'md'].loaderSize} /> : null}
    </Box>
  )
}

Button.displayName = 'Button'
