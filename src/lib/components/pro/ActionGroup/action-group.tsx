import { cloneElement, createRef, KeyboardEvent, ReactNode, RefObject, useRef, useState } from 'react'

import { WithSlots } from 'lib/components/shared'
import { Flex } from 'lib/index.core'

import {
  DEFAULT_ACTION_GROUP_DIRECTION,
  DEFAULT_ACTION_GROUP_GAP,
  DEFAULT_ACTION_GROUP_INTENT,
  DEFAULT_ACTION_GROUP_RIPPLE,
} from './constants'
import { getInitialActiveIndex, getTargetIndexFromKeyboardEvent } from './helpers'
import { ActionGroupItemInternalProps } from './slots'
import { ActionGroupProps } from './types'

const ActionGroupImpl = ({
  tagRef,
  tagAttrs,
  direction = DEFAULT_ACTION_GROUP_DIRECTION,
  gap = DEFAULT_ACTION_GROUP_GAP,
  attached,
  color,
  intent = DEFAULT_ACTION_GROUP_INTENT,
  elevated,
  ripple = DEFAULT_ACTION_GROUP_RIPPLE,
  itemSlots,
}: ActionGroupProps & { itemSlots: ReactNode[] }) => {
  const [activeIndex, setActiveIndex] = useState(getInitialActiveIndex(itemSlots))

  const itemRefs = useRef<RefObject<HTMLElement | null>[]>([])

  itemSlots.forEach((_, index) => {
    itemRefs.current[index] ??= createRef<HTMLElement>()
  })

  const focusItem = (index: number) => {
    setActiveIndex(index)
    itemRefs.current[index]?.current?.focus()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLElement>, index: number) => {
    const targetIndex = getTargetIndexFromKeyboardEvent(e, index, itemSlots, direction)
    if (targetIndex === undefined) return
    e.preventDefault()
    focusItem(targetIndex)
  }

  const isAttachedStart = attached === 'start' || attached === 'both'
  const isAttachedEnd = attached === 'end' || attached === 'both'
  const shouldSquareTop = direction === 'column' && isAttachedStart
  const shouldSquareRight = direction === 'row' && isAttachedEnd
  const shouldSquareBottom = direction === 'column' && isAttachedEnd
  const shouldSquareLeft = direction === 'row' && isAttachedStart

  return (
    <Flex
      tagRef={tagRef}
      tagAttrs={tagAttrs}
      flexDirection={direction}
      color={color}
      intent={intent}
      elevated={elevated}
      drawable
      surface="dividing"
      variant="solid"
      alignItems="stretch"
      gap={gap}
      borderTopLeftRadius={shouldSquareTop || shouldSquareLeft ? '0px' : undefined}
      borderTopRightRadius={shouldSquareTop || shouldSquareRight ? '0px' : undefined}
      borderBottomRightRadius={shouldSquareBottom || shouldSquareRight ? '0px' : undefined}
      borderBottomLeftRadius={shouldSquareBottom || shouldSquareLeft ? '0px' : undefined}
      paddingTop={isAttachedStart && direction === 'column' ? gap : undefined}
      paddingRight={isAttachedEnd && direction === 'row' ? gap : undefined}
      paddingBottom={isAttachedEnd && direction === 'column' ? gap : undefined}
      paddingLeft={isAttachedStart && direction === 'row' ? gap : undefined}
    >
      {itemSlots.map((slot, index) =>
        cloneElement(
          slot as any,
          {
            key: index,
            tagRef: itemRefs.current[index],
            tagAttrs: {
              tabIndex: activeIndex === index ? 0 : -1,
              onFocus: () => {
                setActiveIndex(index)
              },
              onKeyDown: (e: KeyboardEvent<HTMLElement>) => {
                onKeyDown(e, index)
              },
            },
            color,
            intent,
            elevated,
            ripple,
            itemsCount: itemSlots.length,
            isFirst: index === 0,
            isLast: index === itemSlots.length - 1,
            direction,
            attached,
          } as ActionGroupItemInternalProps<any>
        )
      )}
    </Flex>
  )
}

export const ActionGroup = (props: ActionGroupProps) => {
  return (
    <WithSlots<'ActionGroup.Item'>
      componentName="ActionGroup"
      slotsConfig={[
        {
          name: 'ActionGroup.Item',
          required: true,
          allowMultiple: true,
        },
      ]}
      childrenToVerify={props.children}
    >
      {({ slotsByName }) => <ActionGroupImpl {...props} itemSlots={slotsByName['ActionGroup.Item']} />}
    </WithSlots>
  )
}

ActionGroup.displayName = 'ActionGroup'
