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
  square,
  color,
  intent = DEFAULT_ACTION_GROUP_INTENT,
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

  return (
    <Flex
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        role: 'toolbar',
        'aria-orientation': direction === 'column' ? 'vertical' : 'horizontal',
      }}
      flexDirection={direction}
      color={color}
      intent={intent}
      drawable
      surface="dividing"
      variant="solid"
      alignItems="stretch"
      gap={gap}
      borderRadius={square ? '0px' : undefined}
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
            ripple,
            itemsCount: itemSlots.length,
            isFirst: index === 0,
            isLast: index === itemSlots.length - 1,
            direction,
            square,
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
