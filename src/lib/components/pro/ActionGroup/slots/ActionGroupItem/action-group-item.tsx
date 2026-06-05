import { Flex } from 'lib/components'

import { ActionGroupItemInternalProps, ActionGroupItemProps, ActionGroupItemTag } from './types'

export const ActionGroupItem = <T extends ActionGroupItemTag = 'button'>({
  children,
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  selected,
  ...internalProps
}: ActionGroupItemProps<T>) => {
  const { color, intent, ripple, itemsCount, isFirst, isLast, direction, square } = internalProps as ActionGroupItemInternalProps

  return (
    <Flex.Item
      tag={tag}
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      color={color}
      intent={intent}
      ripple={ripple}
      surface={selected ? 'selected' : undefined}
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
