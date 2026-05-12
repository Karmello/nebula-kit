import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Text, Loader, Flex } from 'lib/components'
import { Ripple } from 'lib/components/core/internal'
import { updateDomRespDataset } from 'lib/service'
import { CONTROL_SIZE_MAP } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import {
  ActionSurfaceTag,
  ActionSurfaceProps,
  DEFAULT_ACTION_SURFACE_INTENT,
  DEFAULT_ACTION_SURFACE_SIZE,
  DEFAULT_ACTION_SURFACE_VARIANT,
  DEFAULT_ACTION_SURFACE_RIPPLE,
  DEFAULT_ACTION_SURFACE_INTERACTIVE,
  DEFAULT_ACTION_SURFACE_TEXT_ALIGN,
  DEFAULT_ACTION_SURFACE_JUSTIFY_CONTENT,
} from './definitions'

import './action-surface.scss'

export const ActionSurface = <T extends ActionSurfaceTag = 'button'>({
  // HtmlTag
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  // Box
  variant = DEFAULT_ACTION_SURFACE_VARIANT,
  color,
  intent = DEFAULT_ACTION_SURFACE_INTENT,
  interactive = DEFAULT_ACTION_SURFACE_INTERACTIVE,
  disabled,
  elevated,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  // Text
  bold,
  iconName,
  iconPlacement,
  iconAngle,
  customSvgIcon,
  justifyContent = DEFAULT_ACTION_SURFACE_JUSTIFY_CONTENT,
  textAlign = DEFAULT_ACTION_SURFACE_TEXT_ALIGN,
  // own
  heading,
  description,
  size = DEFAULT_ACTION_SURFACE_SIZE,
  fullWidth,
  loading,
  ripple = DEFAULT_ACTION_SURFACE_RIPPLE,
  selected,
  onClick,
}: ActionSurfaceProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespDataset('ActionSurface', tagRef || ref, bp, { fullWidth })
  }, [bp, fullWidth])

  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('action-surface'), tagAttrs?.className),
          type: tag === 'button' ? tagAttrs?.type || 'button' : undefined,
          'aria-disabled': disabled || undefined,
          style: { ...tagAttrs?.style, pointerEvents: loading ? 'none' : undefined },
          onClick,
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
      <Flex tag="span" flexDirection="column">
        <Text
          tag="span"
          fontSize={CONTROL_SIZE_MAP[size || 'md'].fontSize}
          lineHeight={CONTROL_SIZE_MAP[size || 'md'].lineHeight}
          bold={bold}
          truncate
          iconName={iconName}
          iconPlacement={iconPlacement}
          iconAngle={iconAngle}
          customSvgIcon={customSvgIcon}
          justifyContent={justifyContent}
          textAlign={textAlign}
        >
          {heading}
        </Text>
        {description ? (
          <Text tag="span" textAlign={textAlign}>
            {description}
          </Text>
        ) : null}
      </Flex>
      {loading && !disabled ? <Loader centered size={CONTROL_SIZE_MAP[size || 'md'].loaderSize} /> : null}
      <Ripple parentRef={tagRef || ref} active={ripple && !loading && !disabled} />
    </Box>
  )
}

ActionSurface.displayName = 'ActionSurface'
