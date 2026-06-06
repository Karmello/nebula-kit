import { Flex } from 'lib/index.core'

import { ActionGroupItemInternalProps, ActionGroupItemProps, ActionGroupItemTag } from './types'

export const ActionGroupItem = <T extends ActionGroupItemTag = 'button'>({
  children,
  tag = 'button' as T,
  selected,
  disabled,
  onClick,
  ...internalProps
}: ActionGroupItemProps<T>) => {
  const { tagAttrs, tagRef, color, intent, elevated, ripple, itemsCount, isFirst, isLast, direction, attached } =
    internalProps as ActionGroupItemInternalProps<T>

  const hasMultipleItems = itemsCount > 1
  const attachedStart = attached === 'start' || attached === 'both'
  const attachedEnd = attached === 'end' || attached === 'both'
  const attachedTopLeft = isFirst && attachedStart
  const attachedTopRight = direction === 'column' ? isFirst && attachedStart : isLast && attachedEnd
  const attachedBottomRight = isLast && attachedEnd
  const attachedBottomLeft = direction === 'column' ? isLast && attachedEnd : isFirst && attachedStart

  return (
    <Flex.Item
      tag={tag}
      tagAttrs={{
        ...tagAttrs,
        onClick,
      }}
      tagRef={tagRef}
      color={color}
      intent={intent}
      elevated={elevated}
      ripple={ripple}
      surface={selected ? 'selected' : undefined}
      disabled={disabled}
      flex="1"
      interactive
      cursor="pointer"
      variant="solid"
      borderRadius={attached === 'both' || (itemsCount > 2 && !isFirst && !isLast) ? '0px' : undefined}
      borderTopLeftRadius={(hasMultipleItems && !isFirst) || attachedTopLeft ? '0px' : undefined}
      borderTopRightRadius={
        (direction === 'row' && hasMultipleItems && !isLast) ||
        (direction === 'column' && hasMultipleItems && isLast) ||
        attachedTopRight
          ? '0px'
          : undefined
      }
      borderBottomRightRadius={(hasMultipleItems && !isLast) || attachedBottomRight ? '0px' : undefined}
      borderBottomLeftRadius={
        (direction === 'row' && hasMultipleItems && !isFirst) ||
        (direction === 'column' && hasMultipleItems && isFirst) ||
        attachedBottomLeft
          ? '0px'
          : undefined
      }
    >
      {children}
    </Flex.Item>
  )
}

ActionGroupItem.displayName = 'ActionGroup.Item'
