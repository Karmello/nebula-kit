import { cloneElement } from 'react'

import { WithSlots } from 'lib/components/shared'
import { Flex } from 'lib/index.core'

import { ActionGroupProvider, useActionGroupContext } from './action-group-provider'
import {
  DEFAULT_ACTION_GROUP_DIRECTION,
  DEFAULT_ACTION_GROUP_GAP,
  DEFAULT_ACTION_GROUP_INTENT,
  DEFAULT_ACTION_GROUP_RIPPLE,
} from './constants'
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
}: ActionGroupProps) => {
  const { itemSlots } = useActionGroupContext()

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
            index,
            color,
            intent,
            elevated,
            ripple,
            itemsCount: itemSlots.length,
            isFirst: index === 0,
            isLast: index === itemSlots.length - 1,
            direction,
            attached,
          } as ActionGroupItemInternalProps
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
      {({ slotsByName }) => {
        const itemSlots = slotsByName['ActionGroup.Item']
        return (
          <ActionGroupProvider itemSlots={itemSlots}>
            <ActionGroupImpl {...props} />
          </ActionGroupProvider>
        )
      }}
    </WithSlots>
  )
}

ActionGroup.displayName = 'ActionGroup'
