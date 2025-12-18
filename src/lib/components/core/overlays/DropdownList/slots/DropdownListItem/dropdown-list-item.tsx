import { ComponentProps, PropsWithoutRef, MouseEvent } from 'react'
import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { ButtonTag } from 'lib/components/core/controls/Button/definitions'

import { DropdownListItemProps } from './definitions'
import { useDropdownListContext } from '../../DropdownListProvider'

import './dropdown-list-item.scss'

export const DropdownListItem = <T extends ButtonTag = 'button'>({
  children,
  tagRef,
  tagAttrs,
  ...buttonProps
}: DropdownListItemProps<T>) => {
  const {
    setResizeVisible,
    keepOpen,
    size,
    variant,
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
      tagRef={tagRef}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('dropdown-list-item'), tagAttrs?.className),
          role: 'option',
          onClick: (
            e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> &
              MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
          ) => {
            if (!keepOpen) {
              setResizeVisible(false)
            }
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
      variant={variant}
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
