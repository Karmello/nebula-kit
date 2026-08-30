import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { Loader } from 'lib/components/core/Loader'
import { Text } from 'lib/components/core/Text'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { syncRespDataset } from 'lib/internals/dom'

import {
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_ICON_PLACEMENT,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_SCALE,
  DEFAULT_BUTTON_VARIANT,
} from './constants'
import type { ButtonProps, ButtonTag } from './types'

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
  // Box
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  theme,
  variant = DEFAULT_BUTTON_VARIANT,
  color,
  intent = DEFAULT_BUTTON_INTENT,
  disabled,
  surface,
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
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('button'), tagAttrs?.className),
        ...(tag === 'button' ? { type: tagAttrs?.type || 'button' } : {}),
        onClick: onClick || tagAttrs?.onClick,
        'aria-disabled': disabled || undefined,
      }}
      tagRef={finalRef}
      theme={theme}
      variant={variant}
      color={color}
      intent={intent}
      disabled={disabled || loading}
      inlineSize={inlineSize}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      surface={surface}
      selected={selected}
      blockSize={CONTROL_SCALE_MAP[scale].blockSize}
      paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
      ripple={ripple}
      interactive
      cursor="pointer"
      position="relative"
    >
      <Box
        tag="span"
        tagAttrs={{
          style: { inlineSize: '100%' },
        }}
        display="flex"
        alignItems="center"
        columnGap={CONTROL_SCALE_MAP[scale].gap}
        justifyContent={
          align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'
        }
      >
        {iconPlacement === 'left' ? icon : null}
        <Text
          tag="span"
          fontSize={CONTROL_SCALE_MAP[scale].fontSize}
          lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
          bold={bold}
          textAlign={align === 'center' ? 'center' : undefined}
          truncate
        >
          {children}
        </Text>
        {iconPlacement === 'right' ? icon : null}
        {loading && !disabled ? <Loader size={CONTROL_SCALE_MAP[scale].fontSize} centered /> : null}
      </Box>
    </Box>
  )
}

Button.displayName = 'Button'
