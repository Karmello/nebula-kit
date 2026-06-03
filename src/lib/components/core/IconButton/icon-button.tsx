import { ComponentProps, ComponentRef, PropsWithoutRef, useRef } from 'react'
import classNames from 'classnames'

import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE, ICON_BUTTON_TAGS } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { IconButtonProps, Loader, WithIcon } from 'lib/index.core'
import { IconButtonTag } from 'lib/types'

import { ActionSurface } from '../ActionSurface'
import { DEFAULT_ICON_BUTTON_INTENT, DEFAULT_ICON_BUTTON_RIPPLE, DEFAULT_ICON_BUTTON_VARIANT } from './definitions'

import './icon-button.scss'

export const IconButton = <T extends IconButtonTag = (typeof ICON_BUTTON_TAGS)[0]>({
  // ActionSurface
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  variant = DEFAULT_ICON_BUTTON_VARIANT,
  color,
  intent = DEFAULT_ICON_BUTTON_INTENT,
  disabled,
  elevated,
  // WithIcon
  customSvgIcon,
  iconName,
  iconAngle,
  // own
  size = DEFAULT_CONTROL_SIZE,
  loading,
  ripple = DEFAULT_ICON_BUTTON_RIPPLE,
  onClick,
}: IconButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = tagRef || ref

  return (
    <ActionSurface
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('icon-button'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={finalRef}
      variant={variant}
      color={color}
      intent={intent}
      disabled={disabled || loading}
      elevated={elevated}
      ripple={ripple}
      onClick={onClick}
      inlineSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
      blockSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
    >
      <WithIcon
        customSvgIcon={customSvgIcon}
        iconName={iconName}
        iconAngle={iconAngle}
        iconSize={CONTROL_SIZE_MAP[size || 'md'].iconSize}
        justifyContent="center"
      />
      {loading && !disabled ? <Loader centered size={CONTROL_SIZE_MAP[size || 'md'].loaderSize} /> : null}
    </ActionSurface>
  )
}

IconButton.displayName = 'IconButton'
