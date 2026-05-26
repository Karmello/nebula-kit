import { ComponentProps, PropsWithoutRef, MouseEvent } from 'react'
import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { ButtonTag } from 'lib/components/core/Button/definitions'

import { DEFAULT_DROPDOWN_LIST_ITEM_ALIGN, DropdownListItemProps } from './definitions'
import { useDropdownListContext } from '../../components'

import './dropdown-list-item.scss'

export const DropdownListItem = <T extends ButtonTag = 'button'>({
  children,
  tag,
  tagRef,
  tagAttrs,
  // Button
  align = DEFAULT_DROPDOWN_LIST_ITEM_ALIGN,
  ...buttonProps
}: DropdownListItemProps<T>) => {
  const { setResizeVisible, keepOpen, itemBlockSize, color, intent, hoveredIndex, setHoveredIndex, blockMouse, setBlockMouse } =
    useDropdownListContext()

  const index = (buttonProps as any).index

  return (
    <Button
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
      fullWidth
      align={align}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}

DropdownListItem.displayName = 'DropdownList.Item'
