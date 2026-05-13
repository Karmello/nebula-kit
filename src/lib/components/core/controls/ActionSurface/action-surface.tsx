import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Text, Loader, Flex } from 'lib/components'
import { Ripple } from 'lib/components/core/internal'
import { updateDomRespDataset } from 'lib/service'
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
  ACTION_SURFACE_SIZE_MAP,
} from './definitions'

import './action-surface.scss'
import { TEXT_TYPOGRAPHY_MAP } from '../../base/Text'

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
  boldHeading,
  italicDescription,
  iconName,
  iconPlacement,
  iconAngle,
  customSvgIcon,
  textAlign = DEFAULT_ACTION_SURFACE_TEXT_ALIGN,
  // own
  heading,
  description,
  size = DEFAULT_ACTION_SURFACE_SIZE,
  fullWidth,
  loading,
  ripple = DEFAULT_ACTION_SURFACE_RIPPLE,
  selected,
  inlineTrailingIcon,
  onClick,
}: ActionSurfaceProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespDataset('ActionSurface', tagRef || ref, bp, { fullWidth })
  }, [bp, fullWidth])

  const buttonAttrs = tag === 'button' ? (tagAttrs as React.ButtonHTMLAttributes<HTMLButtonElement> | undefined) : undefined

  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('action-surface'), tagAttrs?.className),
          type: buttonAttrs?.type || 'button',
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
      blockSize={ACTION_SURFACE_SIZE_MAP[size || 'md'].blockSize}
      paddingInline={ACTION_SURFACE_SIZE_MAP[size || 'md'].paddingInline}
    >
      <Flex
        tag="span"
        tagAttrs={{ style: { blockSize: '100%' } }}
        flexDirection="column"
        alignItems="stretch"
        justifyContent="center"
        rowGap={ACTION_SURFACE_SIZE_MAP[size || 'md'].gap || '0px'}
      >
        <Text
          tag="span"
          fontSize={ACTION_SURFACE_SIZE_MAP[size || 'md'].fontSize}
          lineHeight={ACTION_SURFACE_SIZE_MAP[size || 'md'].lineHeight}
          bold={boldHeading}
          truncate
          iconName={iconName}
          iconPlacement={iconPlacement}
          iconAngle={iconAngle}
          customSvgIcon={customSvgIcon}
          justifyContent={
            textAlign === 'center' ? 'center' : iconPlacement === 'right' && !inlineTrailingIcon ? 'space-between' : 'flex-start'
          }
          textAlign={textAlign}
        >
          {heading}
        </Text>
        {description ? (
          <Text
            tag="span"
            fontSize={TEXT_TYPOGRAPHY_MAP.small.fontSize}
            lineHeight={TEXT_TYPOGRAPHY_MAP.small.lineHeight}
            textAlign={textAlign}
            italic={italicDescription}
            clampLines={1}
          >
            {description}
          </Text>
        ) : null}
      </Flex>
      {loading && !disabled ? <Loader centered size={ACTION_SURFACE_SIZE_MAP[size || 'md'].loaderSize} /> : null}
      <Ripple parentRef={tagRef || ref} active={ripple && !loading && !disabled} />
    </Box>
  )
}

ActionSurface.displayName = 'ActionSurface'
