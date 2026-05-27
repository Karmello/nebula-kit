import { ComponentProps, PropsWithoutRef, MouseEvent } from 'react'
import classNames from 'classnames'

import { ActionSurface } from 'lib/components'
import { ActionSurfaceTag, DEFAULT_ACTION_SURFACE_TAG } from 'lib/components/core/ActionSurface/definitions'
import { withPrefix } from 'lib/helpers'

import { type DropdownListItemProps } from './definitions'
import { useDropdownListContext } from '../../components'

import './dropdown-list-item.scss'

export const DropdownListItem = <T extends ActionSurfaceTag = typeof DEFAULT_ACTION_SURFACE_TAG>({
  // ActionSurface
  children,
  tag,
  tagRef,
  tagAttrs,
  ...rest
}: DropdownListItemProps<T>) => {
  const { setResizeVisible, keepOpen, itemBlockSize, color, intent, hoveredIndex, setHoveredIndex, blockMouse, setBlockMouse } =
    useDropdownListContext()

  const index = (rest as any).index

  return (
    <ActionSurface
      tag={tag}
      tagRef={tagRef}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('dropdown-list-item'), tagAttrs?.className),
          'data-neb-dropdown-list-item-index': index,
          'data-neb-box-hovered': blockMouse && index === hoveredIndex,
          role: 'option',
          onClick: (
            e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent> & MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
          ) => {
            if (!keepOpen) setResizeVisible(false)
            tagAttrs?.onClick?.(e)
          },
          onMouseMove: () => {
            setBlockMouse(false)
            setHoveredIndex(index)
          },
          onMouseLeave: () => {
            if (!blockMouse) setHoveredIndex(-1)
          },
        } as PropsWithoutRef<ComponentProps<T>>
      }
      variant="solid"
      color={color}
      intent={intent}
      // TODO
      // size={size}
      elevated
      // fullWidth
      // align={align}
      // {...buttonProps}
    >
      {children}
    </ActionSurface>
  )
}

DropdownListItem.displayName = 'DropdownList.Item'
