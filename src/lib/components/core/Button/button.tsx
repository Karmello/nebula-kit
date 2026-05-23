import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Text, Loader, WithIcon, Flex } from 'lib/components'
import { Ripple } from 'lib/components/internal'
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
  // WithIcon
  customSvgIcon,
  iconName,
  iconAngle,
  iconPlacement,
  // own
  size = DEFAULT_BUTTON_SIZE,
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
    updateDomRespDataset('Button', finalRef, bp, { fullWidth })
  }, [bp, fullWidth])

  const isSquare = children === undefined || size === '2xs'

  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          onClick,
          ...tagAttrs,
          className: classNames(withPrefix('button'), isSquare ? withPrefix('button-square') : undefined, tagAttrs?.className),
          type: tagAttrs?.type || 'button',
          'aria-disabled': disabled || undefined,
          style: { ...tagAttrs?.style, pointerEvents: loading ? 'none' : undefined },
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={finalRef}
      drawable
      variant={variant}
      color={color}
      intent={intent}
      disabled={disabled || loading}
      inlineSize={isSquare ? CONTROL_SIZE_MAP[size || 'md'].blockSize : inlineSize}
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
        inlineSize="100%"
        iconName={iconName}
        iconPlacement={iconPlacement}
        iconSize={CONTROL_SIZE_MAP[size || 'md'].iconSize}
        iconAngle={iconAngle}
        customSvgIcon={customSvgIcon}
        justifyContent={align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'}
        gap={CONTROL_SIZE_MAP[size || 'md'].iconGap}
      >
        {!isSquare ? (
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
        ) : null}
      </WithIcon>
      {loading && !disabled ? <Loader centered size={CONTROL_SIZE_MAP[size || 'md'].loaderSize} /> : null}
      <Ripple parentRef={finalRef} active={ripple && !loading && !disabled} />
    </Box>
  )
}

Button.displayName = 'Button'
