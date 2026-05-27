import { MouseEvent } from 'react'

import { ActionSurface } from 'lib/components'

import { useDropdownListContext } from '../../providers'
import { DropdownListItemProps } from './definitions'

export const DropdownListItem = ({ index, children, ...rest }: DropdownListItemProps & { index: number }) => {
  const { blockMouse, hoveredIndex, setResizeVisible, setBlockMouse, setHoveredIndex, keepOpen } = useDropdownListContext()

  return (
    <ActionSurface
      tagAttrs={{
        'data-neb-dropdown-list-item-index': index,
        'data-neb-box-hovered': blockMouse && index === hoveredIndex,
        role: 'option',
        onClick: (e: MouseEvent) => {
          if (!keepOpen) setResizeVisible(false)
          rest.onClick?.(e as any)
        },
        onMouseMove: () => {
          setBlockMouse(false)
          setHoveredIndex(index)
        },
        onMouseLeave: () => {
          if (!blockMouse) setHoveredIndex(-1)
        },
      }}
      {...rest}
    >
      {children}
    </ActionSurface>
  )
}

DropdownListItem.displayName = 'DropdownList.Item'
