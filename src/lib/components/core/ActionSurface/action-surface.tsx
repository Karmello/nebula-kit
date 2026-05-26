import { ComponentProps, ComponentRef, PropsWithoutRef, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { Ripple } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import { ActionSurfaceProps, ActionSurfaceTag } from './definitions'

export const DEFAULT_ACTION_SURFACE_TAG: ActionSurfaceTag = 'button'
export const DEFAULT_ACTION_SURFACE_INTERACTIVE: ActionSurfaceProps['interactive'] = true
export const DEFAULT_ACTION_SURFACE_RIPPLE: ActionSurfaceProps['ripple'] = true

export const ActionSurface = <T extends ActionSurfaceTag = typeof DEFAULT_ACTION_SURFACE_TAG>({
  // Box
  children,
  tag = DEFAULT_ACTION_SURFACE_TAG as T,
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
    >
      {children}
      <Ripple parentRef={finalRef} active={ripple && !disabled} />
    </Box>
  )
}

ActionSurface.displayName = 'ActionSurface'
