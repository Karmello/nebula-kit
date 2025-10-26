import { ComponentProps, PropsWithoutRef, MouseEvent } from 'react'
import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { ButtonTag } from 'lib/components/controls/Button/definitions'

import { DropdownListItemProps } from './definitions'
import { useDropdownListContext } from '../../DropdownListProvider'

import './dropdown-list-item.scss'

export const DropdownListItem = <T extends ButtonTag = 'button'>({
  children,
  tag,
  tagRef,
  tagAttrs,
  ...buttonProps
}: DropdownListItemProps<T>) => {
  const { setAnimateVisible, keepOpen, size, itemVariant, itemIntent } = useDropdownListContext()

  return (
    <Button
      tag={tag}
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
              setAnimateVisible(false)
            }
            tagAttrs?.onClick?.(e)
          },
        } as PropsWithoutRef<ComponentProps<T>>
      }
      variant={itemVariant}
      intent={itemIntent}
      size={size}
      fullWidth
      {...buttonProps}
    >
      {children}
    </Button>
  )
}

DropdownListItem.displayName = 'DropdownList.Item'
