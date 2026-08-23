import { MouseEvent } from 'react'

import { Box } from 'lib/index.core'

import { useDropdownListContext } from '../../providers'
import { DropdownListItemProps } from './types'

export const DropdownListItem = ({
  index,
  children,
  ...rest
}: DropdownListItemProps & { index: number }) => {
  const {
    blockMouse,
    hoveredIndex,
    setResizeVisible,
    setBlockMouse,
    setHoveredIndex,
    keepOpen,
    color,
    intent,
  } = useDropdownListContext()

  return (
    <Box
      tag="button"
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
      variant="solid"
      color={color}
      intent={intent}
      borderRadius="0px"
      interactive
      cursor="pointer"
      {...rest}
    >
      {children}
    </Box>
  )
}

DropdownListItem.displayName = 'DropdownList.Item'
