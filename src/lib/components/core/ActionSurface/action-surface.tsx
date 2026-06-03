import { ComponentProps, ComponentRef, PropsWithoutRef, useRef } from 'react'
import classNames from 'classnames'

// import { Ripple } from 'lib/components/shared'
import { ACTION_SURFACE_TAGS } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { ActionSurfaceTag } from 'lib/types'

import { Box } from '../Box'
import { ActionSurfaceProps, DEFAULT_ACTION_SURFACE_RIPPLE } from './definitions'

import './action-surface.scss'

export const ActionSurface = <T extends ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[0]>({
  // own
  ripple = DEFAULT_ACTION_SURFACE_RIPPLE,
  selected,
  onClick,
  // Box
  tag = ACTION_SURFACE_TAGS[0] as T,
  tagRef,
  tagAttrs,
  children,
  ...boxProps
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
            pointerEvents: boxProps.disabled ? 'none' : undefined,
          },
          'aria-disabled': boxProps.disabled || undefined,
        } as PropsWithoutRef<ComponentProps<T>>
      }
      drawable
      interactive
      surface={selected ? 'selected' : undefined}
      position="relative"
      overflow="clip"
      cursor="pointer"
      {...boxProps}
    >
      {children}
      {/* <Ripple parentRef={finalRef} active={ripple && !boxProps.disabled} /> */}
    </Box>
  )
}

ActionSurface.displayName = 'ActionSurface'
