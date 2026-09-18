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
  BUTTON_VARIANT_MAP,
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
  elemTag = 'button' as T,
  elemAttrs,
  elemRef,
  variant = DEFAULT_BUTTON_VARIANT,
  color,
  intent = DEFAULT_BUTTON_INTENT,
  disabled,
  surfaceDepth,
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
  const finalRef = elemRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespDataset('Button', finalRef, bp, { fullWidth })
  }, [bp, fullWidth])

  const icon = (
    <Icon name={iconName} size={CONTROL_SCALE_MAP[scale].iconSize}>
      {customSvgIcon}
    </Icon>
  )

  return (
    <Box elemTag="span" position="relative" display="inline">
      <Box
        elemTag={elemTag}
        className={classNames(withPrefix('button'), elemAttrs?.className)}
        onClick={onClick || elemAttrs?.onClick}
        elemAttrs={{
          ...elemAttrs,
          ...(elemTag === 'button' ? { type: elemAttrs?.type || 'button' } : {}),
          'aria-disabled': disabled || undefined,
        }}
        elemRef={finalRef}
        bgMode={BUTTON_VARIANT_MAP[variant].bgMode}
        borderMode={BUTTON_VARIANT_MAP[variant].borderMode}
        textMode={BUTTON_VARIANT_MAP[variant].textMode}
        color={color}
        intent={intent}
        disabled={disabled || loading}
        inlineSize={inlineSize}
        minInlineSize={minInlineSize}
        maxInlineSize={maxInlineSize}
        surfaceDepth={surfaceDepth}
        bgRole={selected ? 'selection' : undefined}
        blockSize={CONTROL_SCALE_MAP[scale].blockSize}
        paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
        ripple={ripple}
        interactive
        cursor="pointer"
      >
        <Box
          elemTag="span"
          elemAttrs={{
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
            elemTag="span"
            fontSize={CONTROL_SCALE_MAP[scale].fontSize}
            lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
            bold={bold}
            textAlign={align === 'center' ? 'center' : undefined}
            truncate
          >
            {children}
          </Text>
          {iconPlacement === 'right' ? icon : null}
        </Box>
      </Box>
      {loading && !disabled ? <Loader size={CONTROL_SCALE_MAP[scale].fontSize} centered /> : null}
    </Box>
  )
}

Button.displayName = 'Button'
