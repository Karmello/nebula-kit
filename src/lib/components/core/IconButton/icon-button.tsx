import { ComponentProps, ComponentRef, PropsWithoutRef, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { Loader } from 'lib/components/core/Loader'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'

import {
  DEFAULT_ICON_BUTTON_INTENT,
  DEFAULT_ICON_BUTTON_RIPPLE,
  DEFAULT_ICON_BUTTON_SCALE,
  DEFAULT_ICON_BUTTON_VARIANT,
} from './constants'
import { IconButtonProps, IconButtonTag } from './types'

import './icon-button.scss'

export const IconButton = <T extends IconButtonTag = 'button'>({
  // own
  scale = DEFAULT_ICON_BUTTON_SCALE,
  loading,
  onClick,
  // Icon
  iconName,
  customSvgIcon,
  // Box
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  variant = DEFAULT_ICON_BUTTON_VARIANT,
  color,
  intent = DEFAULT_ICON_BUTTON_INTENT,
  disabled,
  surfaceDepth,
  ripple = DEFAULT_ICON_BUTTON_RIPPLE,
}: IconButtonProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = tagRef || ref

  return (
    <Box
      tag={tag}
      tagRef={finalRef}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('icon-button'), tagAttrs?.className),
          ...(tag === 'button'
            ? { type: (tagAttrs as ComponentProps<'button'> | undefined)?.type || 'button' }
            : {}),
          onClick: onClick || tagAttrs?.onClick,
          'aria-disabled': disabled || undefined,
        } as PropsWithoutRef<ComponentProps<T>>
      }
      // variant={variant}
      color={color}
      intent={intent}
      disabled={disabled || loading}
      surfaceDepth={surfaceDepth}
      ripple={ripple}
      minInlineSize={CONTROL_SCALE_MAP[scale].blockSize}
      maxInlineSize={CONTROL_SCALE_MAP[scale].blockSize}
      blockSize={CONTROL_SCALE_MAP[scale].blockSize}
      interactive
      cursor="pointer"
      position="relative"
    >
      <Box display="flex" justifyContent="center" alignItems="center" blockSize="100%">
        <Icon name={iconName} size={CONTROL_SCALE_MAP[scale].fontSize}>
          {customSvgIcon}
        </Icon>
        {loading && !disabled ? <Loader centered size={CONTROL_SCALE_MAP[scale].fontSize} /> : null}
      </Box>
    </Box>
  )
}

IconButton.displayName = 'IconButton'
