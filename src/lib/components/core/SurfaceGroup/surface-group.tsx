import { Children, cloneElement, ElementType, isValidElement, ReactElement } from 'react'

import { Box } from 'lib/components/core/Box'
import { NEB_LENGTH } from 'lib/constants'
import { useRespValue } from 'lib/hooks'

import { DEFAULT_SURFACE_GROUP_DISPLAY, DEFAULT_SURFACE_GROUP_FLEX_DIRECTION } from './constants'
import { resolveJoinedSurfaceStyle } from './helpers'
import { type SurfaceGroupProps } from './types'

export const SurfaceGroup = <T extends ElementType = 'div'>({
  children,
  squared,
  display = DEFAULT_SURFACE_GROUP_DISPLAY,
  flexDirection = DEFAULT_SURFACE_GROUP_FLEX_DIRECTION,
  ...props
}: SurfaceGroupProps<T>) => {
  const actualFlexDirection = useRespValue(flexDirection)
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<any>[]

  return (
    <Box
      display={display}
      flexDirection={flexDirection}
      borderRadius={squared ? NEB_LENGTH.px_000 : undefined}
      {...props}
    >
      {items.map((item, index) => {
        const style = resolveJoinedSurfaceStyle({
          index,
          count: items.length,
          squared,
          flexDirection: actualFlexDirection ?? 'row',
        })

        return cloneElement(item, {
          key: index,
          tagAttrs: {
            ...item.props.tagAttrs,
            style: { ...item.props.tagAttrs?.style, ...style },
          },
        })
      })}
    </Box>
  )
}

SurfaceGroup.displayName = 'SurfaceGroup'
