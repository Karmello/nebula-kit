import { ComponentProps, ComponentRef, PropsWithoutRef, useRef } from 'react'
import classNames from 'classnames'

import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { Flex, Icon, IconButtonProps, Loader } from 'lib/index.core'
import { IconButtonTag } from 'lib/types'

import { DEFAULT_ICON_BUTTON_INTENT, DEFAULT_ICON_BUTTON_RIPPLE, DEFAULT_ICON_BUTTON_VARIANT } from './constants'

import './icon-button.scss'

export const IconButton = <T extends IconButtonTag = 'button'>({
  // own
  size = DEFAULT_CONTROL_SIZE,
  loading,
  onClick,
  // Icon
  iconName,
  customSvgIcon,
  // Flex
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  variant = DEFAULT_ICON_BUTTON_VARIANT,
  color,
  intent = DEFAULT_ICON_BUTTON_INTENT,
  disabled,
  elevated,
  ripple = DEFAULT_ICON_BUTTON_RIPPLE,
}: IconButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = tagRef || ref

  return (
    <Flex
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('icon-button'), tagAttrs?.className),
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
      elevated={elevated}
      ripple={ripple}
      minInlineSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
      maxInlineSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
      blockSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
      interactive
      cursor="pointer"
      position="relative"
      justifyContent="center"
      alignItems="center"
    >
      <Icon name={iconName} size={CONTROL_SIZE_MAP[size || 'md'].iconSize}>
        {customSvgIcon}
      </Icon>
      {loading && !disabled ? <Loader centered size={CONTROL_SIZE_MAP[size || 'md'].loaderSize} /> : null}
    </Flex>
  )
}

IconButton.displayName = 'IconButton'
