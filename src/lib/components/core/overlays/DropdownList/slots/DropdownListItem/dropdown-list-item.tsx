import { ComponentProps, PropsWithoutRef, MouseEvent } from 'react'
import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { ButtonTag } from 'lib/components/core/controls/Button/definitions'

import { DropdownListItemProps } from './definitions'
import { useDropdownListContext } from '../../components'

import './dropdown-list-item.scss'

export const DropdownListItem = <T extends ButtonTag = 'button'>({
  children,
  tag,
  tagRef,
  tagAttrs,
  ...buttonProps
}: DropdownListItemProps<T>) => {
  const {
    setResizeVisible,
    keepOpen,
    size,
    color,
    intent,
    hoveredIndex,
    setHoveredIndex,
    blockMouse,
    setBlockMouse,
  } = useDropdownListContext()

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
          role: 'option',
          onClick: (
            e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent> &
              MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
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
      size={size}
      highlighted={blockMouse ? index === hoveredIndex : undefined}
      fullWidth
      {...buttonProps}
    >
      {children}
    </Button>
  )
}

DropdownListItem.displayName = 'DropdownList.Item'
