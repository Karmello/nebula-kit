import { Flex } from 'lib/index.core'

import { ActionGroupItemInternalProps, ActionGroupItemProps, ActionGroupItemTag } from './types'

export const ActionGroupItem = <T extends ActionGroupItemTag = 'button'>({
  children,
  tag = 'button' as T,
  selected,
  disabled,
  ...internalProps
}: ActionGroupItemProps<T>) => {
  const { tagAttrs, tagRef, color, intent, ripple, itemsCount, isFirst, isLast, direction, square } =
    internalProps as ActionGroupItemInternalProps<T>

  return (
    <Flex.Item
      tag={tag}
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      color={color}
      intent={intent}
      ripple={ripple}
      surface={selected ? 'selected' : undefined}
      disabled={disabled}
      flex="1"
      interactive
      cursor="pointer"
      variant="solid"
      borderRadius={square || (itemsCount > 2 && !isFirst && !isLast) ? '0px' : undefined}
      borderTopRightRadius={
        (direction === 'row' && itemsCount > 1 && !isLast) || (direction === 'column' && isLast) ? '0px' : undefined
      }
      borderBottomRightRadius={itemsCount > 1 && !isLast ? '0px' : undefined}
      borderTopLeftRadius={itemsCount > 1 && !isFirst ? '0px' : undefined}
      borderBottomLeftRadius={
        (direction === 'row' && itemsCount > 1 && !isFirst) || (direction === 'column' && isFirst) ? '0px' : undefined
      }
    >
      {children}
    </Flex.Item>
  )
}

ActionGroupItem.displayName = 'ActionGroup.Item'
