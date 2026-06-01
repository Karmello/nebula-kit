import { ComponentProps, ComponentRef, PropsWithoutRef, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { Ripple } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import { ActionSurfaceTag } from '../../../types'
import { ACTION_SURFACE_TAGS } from '../../../constants'
import { type ActionSurfaceProps, DEFAULT_ACTION_SURFACE_INTERACTIVE, DEFAULT_ACTION_SURFACE_RIPPLE } from './definitions'

import './action-surface.scss'

export const ActionSurface = <T extends ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[0]>({
  // Box
  children,
  tag = ACTION_SURFACE_TAGS[0] as T,
  tagAttrs,
  tagRef,
  color,
  disabled,
  elevated,
  intent,
  interactive = DEFAULT_ACTION_SURFACE_INTERACTIVE,
  onClick,
  ripple = DEFAULT_ACTION_SURFACE_RIPPLE,
  selected,
  variant,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  blockSize,
  minBlockSize,
  maxBlockSize,
  padding,
  paddingBlock,
  paddingInline,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
}: ActionSurfaceProps<T>) => {
  const localRef = useRef<ComponentRef<T>>(null)
  const finalRef = tagRef || localRef

  return (
    <Box
      tag={tag}
      tagRef={finalRef}
      tagAttrs={
        {
          onClick,
          ...tagAttrs,
          className: classNames(withPrefix('action-surface'), tagAttrs?.className),
          ...(tag === 'button' ? { type: (tagAttrs as ComponentProps<'button'> | undefined)?.type || 'button' } : {}),
          style: {
            ...tagAttrs?.style,
            pointerEvents: disabled ? 'none' : undefined,
          },
          'aria-disabled': disabled || undefined,
        } as PropsWithoutRef<ComponentProps<T>>
      }
      drawable
      variant={variant}
      color={color}
      intent={intent}
      disabled={disabled}
      interactive={interactive}
      elevated={elevated}
      surface={selected ? 'selected' : undefined}
      position="relative"
      overflow="clip"
      inlineSize={inlineSize}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      blockSize={blockSize}
      minBlockSize={minBlockSize}
      maxBlockSize={maxBlockSize}
      padding={padding}
      paddingBlock={paddingBlock}
      paddingInline={paddingInline}
      borderRadius={borderRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
    >
      {children}
      <Ripple parentRef={finalRef} active={ripple && !disabled} />
    </Box>
  )
}

ActionSurface.displayName = 'ActionSurface'
